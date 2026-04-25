import { Sparkles } from "lucide-react";

const AuditFab = () => (
  <a
    href="https://tally.so/r/QKxVJY"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-24 md:bottom-6 right-4 md:right-6 z-50 group flex items-center gap-3 bg-primary text-primary-foreground pl-4 pr-5 py-3 shadow-yellow animate-pulse-yellow font-bold uppercase tracking-wider text-xs sm:text-sm border-2 border-primary-foreground/10 max-w-[280px] sm:max-w-none"
    aria-label="Solicita tu Auditoría Express Gratuita"
  >
    <Sparkles className="w-5 h-5 shrink-0" strokeWidth={2.5} />
    <span className="leading-tight">
      <span className="hidden sm:inline">¿Web de alto rendimiento? </span>
      Auditoría Express Gratuita
    </span>
  </a>
);

export default AuditFab;
