import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { getProfile } from "./api.js";
import { useLang } from "./LangContext.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import WhatsAppFloat from "./components/WhatsAppFloat.jsx";
import Home from "./pages/Home.jsx";
import ProjectDetail from "./pages/ProjectDetail.jsx";
import NotFound from "./pages/NotFound.jsx";

function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

export default function App() {
  const { lang, t } = useLang();
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    setError(false);
    getProfile(lang)
      .then(setProfile)
      .catch(() => setError(true));
  }, [lang]);

  if (error && !profile) {
    return (
      <div className="center-screen">
        <h2>{t("serverErrorTitle")}</h2>
        <p>{t("serverErrorText")}</p>
      </div>
    );
  }

  if (!profile) return <div className="center-screen">{t("loading")}</div>;

  return (
    <>
      <ScrollManager />
      <Navbar profile={profile} />
      <main>
        <Routes>
          <Route path="/" element={<Home profile={profile} />} />
          <Route path="/projects/:slug" element={<ProjectDetail profile={profile} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer profile={profile} />
      <WhatsAppFloat profile={profile} />
    </>
  );
}
