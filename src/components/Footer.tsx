import { Wrench } from "lucide-react";
import { PrivacyLink, TermsLink, CookiesLink } from "./LegalModals";

const Footer = () => (
  <footer className="bg-background border-t-2 border-border">
    <div className="yellow-stripe h-1.5" aria-hidden />
    <div className="container py-14 grid md:grid-cols-3 gap-10">
      <div>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-primary text-primary-foreground flex items-center justify-center">
            <Wrench className="w-5 h-5" strokeWidth={2.5} />
          </div>
          <div className="font-display text-xl">Taller Heavy Duty</div>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Taller especializado en reparación, mantenimiento y diagnóstico de equipo pesado en la
          República de Panamá.
        </p>
      </div>

      <div>
        <h4 className="font-display text-sm text-primary tracking-widest mb-4">Cumplimiento Legal</h4>
        <ul className="space-y-2">
          <li><PrivacyLink /></li>
          <li><TermsLink /></li>
          <li><CookiesLink /></li>
        </ul>
      </div>

      <div>
        <h4 className="font-display text-sm text-primary tracking-widest mb-4">Operaciones</h4>
        <p className="text-sm text-muted-foreground">Aviso de Operación N.º 2024-58741-PA</p>
        <p className="text-sm text-muted-foreground mt-1">RUC: 155847123-2-2024</p>
        <p className="text-sm text-muted-foreground mt-1">Vía Tocumen, Panamá</p>
        <a
          href="https://www.google.com/maps/search/?api=1&query=V%C3%ADa+Tocumen+Parque+Industrial+Las+Ma%C3%B1anitas+Panam%C3%A1"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-3 text-sm text-primary font-semibold hover:underline"
        >
          Ver ubicación en Google Maps →
        </a>
      </div>
    </div>

    <div className="border-t border-border">
      <div className="container py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
        <p>© {new Date().getFullYear()} Taller Heavy Duty Panamá. Todos los derechos reservados.</p>
        <p className="uppercase tracking-wider">Sitio de muestra · MF Web Design &amp; Compliance</p>
      </div>
    </div>
  </footer>
);

export default Footer;
