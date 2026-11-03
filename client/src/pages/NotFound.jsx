import { Link } from "react-router-dom";
import { useLang } from "../LangContext.jsx";

export default function NotFound() {
  const { t } = useLang();
  return (
    <div className="center-screen">
      <h2>{t("notFoundTitle")}</h2>
      <p>{t("notFoundText")}</p>
      <Link to="/" className="btn btn-primary">{t("goHome")}</Link>
    </div>
  );
}
