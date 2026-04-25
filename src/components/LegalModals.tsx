import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ReactNode } from "react";

const LegalLink = ({ label, title, children }: { label: string; title: string; children: ReactNode }) => (
  <Dialog>
    <DialogTrigger className="text-sm text-foreground/70 hover:text-primary transition-colors text-left">
      {label}
    </DialogTrigger>
    <DialogContent className="max-w-2xl bg-card border-border">
      <DialogHeader>
        <DialogTitle className="font-display text-2xl text-foreground">{title}</DialogTitle>
      </DialogHeader>
      <ScrollArea className="max-h-[60vh] pr-4">
        <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">{children}</div>
      </ScrollArea>
    </DialogContent>
  </Dialog>
);

export const PrivacyLink = () => (
  <LegalLink label="Aviso de Privacidad" title="Aviso de Privacidad">
    <p>
      <strong className="text-foreground">Taller Heavy Duty Panamá</strong> (en adelante, "el Taller")
      respeta su privacidad y trata sus datos personales conforme a la <strong>Ley 81 del 26 de marzo
      de 2019</strong> sobre Protección de Datos Personales de la República de Panamá.
    </p>
    <p>
      <strong className="text-foreground">Datos recolectados:</strong> nombre, teléfono, correo
      electrónico e información del equipo a reparar, suministrados voluntariamente a través de nuestros
      formularios.
    </p>
    <p>
      <strong className="text-foreground">Finalidades:</strong> contactar al cliente, gestionar
      cotizaciones, prestar servicios mecánicos contratados y enviar comunicaciones operativas.
    </p>
    <p>
      <strong className="text-foreground">Derechos ARCO:</strong> el titular puede acceder, rectificar,
      cancelar u oponerse al tratamiento escribiendo a privacidad@tallerheavyduty.pa.
    </p>
    <p>
      <strong className="text-foreground">Conservación:</strong> los datos se conservan por el plazo
      necesario para cumplir las finalidades y obligaciones legales aplicables.
    </p>
  </LegalLink>
);

export const TermsLink = () => (
  <LegalLink label="Términos y Condiciones" title="Términos y Condiciones">
    <p>
      Los servicios mecánicos prestados por <strong className="text-foreground">Taller Heavy Duty
      Panamá</strong> se sujetan a las siguientes condiciones generales.
    </p>
    <p>
      <strong className="text-foreground">1. Cotización y aprobación:</strong> todo trabajo requiere
      cotización escrita y aprobación previa del cliente.
    </p>
    <p>
      <strong className="text-foreground">2. Garantía:</strong> los trabajos cuentan con garantía
      escrita de 90 días sobre mano de obra, sujeta a condiciones de uso normal del equipo.
    </p>
    <p>
      <strong className="text-foreground">3. Repuestos:</strong> se utilizan repuestos OEM o
      equivalentes certificados. La garantía del repuesto es la otorgada por el fabricante.
    </p>
    <p>
      <strong className="text-foreground">4. Custodia del equipo:</strong> el cliente cuenta con un
      plazo de 30 días posteriores al aviso de entrega para retirar su equipo.
    </p>
    <p>
      <strong className="text-foreground">5. Limitación de responsabilidad:</strong> el Taller no
      responde por daños preexistentes, vicios ocultos no diagnosticados ni por uso indebido posterior.
    </p>
  </LegalLink>
);

export const CookiesLink = () => (
  <LegalLink label="Política de Cookies" title="Política de Cookies">
    <p>
      Este sitio web utiliza cookies <strong className="text-foreground">técnicas y analíticas</strong>
      para garantizar el correcto funcionamiento y medir el uso de la página, en cumplimiento con la
      Ley 81 de 2019 de Panamá.
    </p>
    <p>
      <strong className="text-foreground">Cookies técnicas:</strong> imprescindibles para la
      navegación, no requieren consentimiento.
    </p>
    <p>
      <strong className="text-foreground">Cookies analíticas:</strong> permiten entender cómo
      interactúan los usuarios con el sitio, mediante datos anónimos y agregados.
    </p>
    <p>
      Puede aceptar o rechazar el uso de cookies analíticas a través del banner mostrado al ingresar al
      sitio o configurar su navegador para bloquearlas en cualquier momento.
    </p>
  </LegalLink>
);
