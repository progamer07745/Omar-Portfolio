import Preloader from "@/components/Preloader";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Services from "@/components/Services";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Companies from "@/components/Companies";
import Certificates from "@/components/Certificates";
import SocialPresence from "@/components/SocialPresence";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import ToTop from "@/components/ToTop";

export default function Home() {
  return (
    <>
      <Preloader />
      <CustomCursor />
      <ScrollProgress />
      <Navbar />

      <main>
        <Hero />
        <Marquee />
        <About />
        <Services />
        <TechStack />
        <Projects />
        <Companies />
        <Certificates />
        <SocialPresence />
        <Contact />
      </main>

      <Footer />
      <WhatsAppFloat />
      <ToTop />
    </>
  );
}
