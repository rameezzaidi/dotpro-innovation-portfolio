import { useLang } from "../LangContext.jsx";
import { LinkedInIcon, UpworkIcon } from "./Icons.jsx";

export default function Footer({ profile }) {
  const { t } = useLang();
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <strong>DotPro Innovation</strong>
          <p>{profile.title}</p>
        </div>
        <div className="footer-links">
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            <LinkedInIcon /> LinkedIn
          </a>
          <a href={profile.upwork} target="_blank" rel="noreferrer">
            <UpworkIcon /> Upwork
          </a>
          <a href={`tel:${profile.phone.replace(/\s/g, "")}`} dir="ltr">{profile.phone}</a>
        </div>
      </div>
      <div className="container copyright">
        <span dir="ltr">© {new Date().getFullYear()} DotPro Innovation.</span> {t("rights")}
      </div>
    </footer>
  );
}
