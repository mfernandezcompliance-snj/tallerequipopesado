import PortfolioBanner from "@/components/PortfolioBanner";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Fleet from "@/components/Fleet";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import AuditFab from "@/components/AuditFab";

const Index = () => (
  <div className="min-h-screen bg-background">
    <PortfolioBanner />
    <Header />
    <main>
      <Hero />
      <Services />
      <Fleet />
      <Contact />
    </main>
    <Footer />
    <PortfolioBanner />
    <CookieBanner />
    <AuditFab />
  </div>
);

export default Index;
