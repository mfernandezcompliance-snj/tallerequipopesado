import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck } from "lucide-react";
import hero from "@/assets/hero-workshop.jpg";

const Hero = () => (
  <section id="inicio" className="relative isolate overflow-hidden">
    <img
      src={hero}
      alt="Taller de equipo pesado reparando un camión de carga"
      width={1920}
      height={1080}
      className="absolute inset-0 w-full h-full object-cover -z-10"
    />
    <div className="absolute inset-0 bg-gradient-overlay -z-10" />
    <div className="absolute inset-0 industrial-bg -z-10 opacity-60" />

    <div className="container py-24 md:py-36 lg:py-44">
      <div className="max-w-3xl animate-fade-up">
        <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/40 px-3 py-1.5 mb-6">
          <ShieldCheck className="w-4 h-4 text-primary" />
          <span className="text-xs font-semibold tracking-widest uppercase text-primary">
            +20 Años de experiencia · Panamá
          </span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-7xl text-foreground leading-[1.05] mb-6">
          Mantenemos tu <span className="text-primary">flota pesada</span> rodando sin parar.
        </h1>
        <p className="text-lg sm:text-xl text-foreground/85 max-w-2xl mb-10 leading-relaxed">
          Reparación, diagnóstico y mantenimiento certificado para camiones, tractomulas y maquinaria
          industrial. Cero tiempos muertos, máxima potencia.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg" variant="industrial" asChild>
            <a href="#contacto">
              Agendar Servicio <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </Button>
          <Button size="lg" variant="outlineHeavy" asChild>
            <a href="#servicios">Ver Servicios</a>
          </Button>
        </div>

        <div className="grid grid-cols-3 gap-6 mt-14 max-w-xl">
          {[
            { n: "24/7", l: "Asistencia" },
            { n: "+500", l: "Equipos atendidos" },
            { n: "98%", l: "Disponibilidad" },
          ].map((s) => (
            <div key={s.l} className="border-l-4 border-primary pl-4">
              <div className="font-display text-3xl text-foreground">{s.n}</div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
