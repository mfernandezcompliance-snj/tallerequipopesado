import { Wrench, Cpu, Cog } from "lucide-react";
import maint from "@/assets/service-maintenance.jpg";
import diag from "@/assets/service-diagnostic.jpg";
import eng from "@/assets/service-engine.jpg";

const services = [
  {
    icon: Wrench,
    title: "Mantenimiento Preventivo",
    desc: "Inspecciones programadas, cambios de aceite, filtros y revisión integral para extender la vida útil de tu equipo.",
    img: maint,
  },
  {
    icon: Cpu,
    title: "Diagnóstico Computarizado",
    desc: "Escaneo electrónico avanzado para todas las marcas: Cummins, Detroit, Caterpillar, Mack y más.",
    img: diag,
  },
  {
    icon: Cog,
    title: "Reparación de Motores",
    desc: "Overhaul completo, rectificación y armado de motores diésel de alta potencia con garantía escrita.",
    img: eng,
  },
];

const Services = () => (
  <section id="servicios" className="py-24 bg-surface industrial-bg">
    <div className="container">
      <div className="max-w-2xl mb-14">
        <div className="text-xs font-semibold tracking-[0.3em] uppercase text-primary mb-3">
          // Nuestros servicios
        </div>
        <h2 className="text-3xl sm:text-5xl text-foreground mb-4">
          Soluciones para cada componente crítico
        </h2>
        <p className="text-muted-foreground text-lg">
          Equipos certificados, herramienta especializada y técnicos con experiencia probada en flota
          pesada panameña.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <article
            key={s.title}
            className="group bg-card heavy-border overflow-hidden hover:border-primary transition-colors duration-300 animate-fade-up"
            style={{ animationDelay: `${i * 100}ms` }}
          >
            <div className="relative h-52 overflow-hidden">
              <img
                src={s.img}
                alt={s.title}
                loading="lazy"
                width={1024}
                height={768}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
              <div className="absolute top-4 left-4 w-12 h-12 bg-primary text-primary-foreground flex items-center justify-center shadow-yellow">
                <s.icon className="w-6 h-6" strokeWidth={2.5} />
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl text-foreground mb-3">{s.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{s.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
