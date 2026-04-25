import fleet from "@/assets/fleet.jpg";
import { CheckCircle2 } from "lucide-react";

const items = [
  "Tractocamiones y semirremolques",
  "Excavadoras y retroexcavadoras",
  "Volquetas y mezcladoras",
  "Generadores y plantas industriales",
];

const Fleet = () => (
  <section id="flota" className="relative py-24 bg-background overflow-hidden">
    <div className="container grid lg:grid-cols-2 gap-12 items-center">
      <div className="relative">
        <div className="absolute -top-3 -left-3 w-24 h-24 border-l-4 border-t-4 border-primary" aria-hidden />
        <div className="absolute -bottom-3 -right-3 w-24 h-24 border-r-4 border-b-4 border-primary" aria-hidden />
        <img
          src={fleet}
          alt="Flota de equipo pesado en patio industrial"
          loading="lazy"
          width={1920}
          height={1080}
          className="w-full h-auto shadow-heavy"
        />
      </div>

      <div>
        <div className="text-xs font-semibold tracking-[0.3em] uppercase text-primary mb-3">
          // Equipos que atendemos
        </div>
        <h2 className="text-3xl sm:text-5xl text-foreground mb-6">
          Cualquier tonelaje, <br /> cualquier marca.
        </h2>
        <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
          Atendemos toda la cadena de logística pesada en Panamá: transporte, construcción, minería e
          industria. Repuestos OEM y refacciones de primera línea.
        </p>
        <ul className="space-y-3">
          {items.map((it) => (
            <li key={it} className="flex items-center gap-3 text-foreground">
              <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
              <span className="font-medium">{it}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default Fleet;
