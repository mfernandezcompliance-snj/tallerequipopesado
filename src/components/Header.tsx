import { Wrench } from "lucide-react";

const links = [
  { href: "#inicio", label: "Inicio" },
  { href: "#servicios", label: "Servicios" },
  { href: "#flota", label: "Flota" },
  { href: "#contacto", label: "Contacto" },
];

const Header = () => (
  <header className="bg-background/95 backdrop-blur border-b-2 border-border">
    <div className="container flex items-center justify-between py-4">
      <a href="#inicio" className="flex items-center gap-3 group">
        <div className="w-10 h-10 bg-primary text-primary-foreground flex items-center justify-center shadow-yellow">
          <Wrench className="w-5 h-5" strokeWidth={2.5} />
        </div>
        <div className="leading-tight">
          <div className="font-display text-lg sm:text-xl text-foreground">Taller Heavy Duty</div>
          <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Equipo Pesado · Panamá</div>
        </div>
      </a>
      <nav className="hidden md:flex items-center gap-8">
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="text-sm font-semibold uppercase tracking-wider text-foreground/80 hover:text-primary transition-colors"
          >
            {l.label}
          </a>
        ))}
      </nav>
    </div>
    <div className="yellow-stripe h-1.5" aria-hidden />
  </header>
);

export default Header;
