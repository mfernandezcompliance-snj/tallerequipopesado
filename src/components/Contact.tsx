import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  const [accept, setAccept] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!accept) {
      toast.error("Debe aceptar el Aviso de Privacidad para continuar.");
      return;
    }
    toast.success("Solicitud enviada. Le contactaremos en menos de 24 horas.");
    (e.target as HTMLFormElement).reset();
    setAccept(false);
  };

  return (
    <section id="contacto" className="py-24 bg-surface industrial-bg">
      <div className="container max-w-3xl">
        <div className="text-center mb-12">
          <div className="text-xs font-semibold tracking-[0.3em] uppercase text-primary mb-3">
            // Contáctanos
          </div>
          <h2 className="text-3xl sm:text-5xl text-foreground mb-6">
            Agenda tu próxima reparación
          </h2>
          <p className="text-muted-foreground text-lg">
            Cuéntanos qué equipo necesitas atender. Nuestro equipo técnico responde en menos de 24 horas
            hábiles.
          </p>
        </div>

        <form onSubmit={onSubmit} className="bg-card heavy-border p-6 sm:p-8 space-y-5">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2 block">
                Nombre completo
              </label>
              <Input required placeholder="Juan Pérez" className="bg-background border-border h-11" />
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2 block">
                Teléfono
              </label>
              <Input required placeholder="+507 ..." className="bg-background border-border h-11" />
            </div>
          </div>
          <div>
            <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2 block">
              Correo electrónico
            </label>
            <Input required type="email" placeholder="correo@empresa.com" className="bg-background border-border h-11" />
          </div>
          <div>
            <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2 block">
              Tipo de equipo / servicio requerido
            </label>
            <Textarea required rows={4} placeholder="Ej: Tractocamión Kenworth T800, falla en sistema de inyección..." className="bg-background border-border" />
          </div>

          <label className="flex items-start gap-3 cursor-pointer">
            <Checkbox
              checked={accept}
              onCheckedChange={(v) => setAccept(!!v)}
              className="mt-0.5 border-border data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
            />
            <span className="text-sm text-muted-foreground leading-relaxed">
              Acepto el <span className="text-primary font-semibold">Aviso de Privacidad</span> y
              autorizo el tratamiento de mis datos conforme a la Ley 81 de 2019 de Panamá. *
            </span>
          </label>

          <Button type="submit" variant="industrial" size="lg" className="w-full">
            Enviar Solicitud
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
