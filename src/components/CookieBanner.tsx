import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const KEY = "thd-cookie-choice";

const CookieBanner = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(KEY)) setShow(true);
  }, []);

  const choose = (v: "accept" | "reject") => {
    localStorage.setItem(KEY, v);
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-card border-t-2 border-primary shadow-heavy">
      <div className="container py-4 flex flex-col md:flex-row items-start md:items-center gap-4 justify-between">
        <p className="text-sm text-foreground/90 max-w-3xl">
          Utilizamos cookies técnicas y de análisis para optimizar su experiencia. Cumplimos con la
          <strong className="text-primary"> Ley 81 de 2019</strong> (Panamá).
        </p>
        <div className="flex gap-3 shrink-0">
          <Button variant="outlineHeavy" size="sm" onClick={() => choose("reject")}>
            Rechazar
          </Button>
          <Button variant="industrial" size="sm" onClick={() => choose("accept")}>
            Aceptar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
