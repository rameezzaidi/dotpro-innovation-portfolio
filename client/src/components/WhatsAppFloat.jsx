import { whatsappLink } from "../api.js";
import { useLang } from "../LangContext.jsx";
import { WhatsAppIcon } from "./Icons.jsx";

export default function WhatsAppFloat({ profile }) {
  const { t } = useLang();
  return (
    <a
      className="wa-float"
      href={whatsappLink(profile.whatsappNumber, t("waHello"))}
      target="_blank"
      rel="noreferrer"
      aria-label={t("ctaWhatsApp")}
    >
      <WhatsAppIcon size={30} />
    </a>
  );
}
