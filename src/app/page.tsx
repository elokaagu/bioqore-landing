import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LogoTicker from "@/components/LogoTicker";
import SectionBlend from "@/components/SectionBlend";
import VoyagerIntro from "@/components/VoyagerIntro";
import HowItWorks from "@/components/HowItWorks";
import Product from "@/components/Product";
import Security from "@/components/Security";
import Roadmap from "@/components/Roadmap";
import Mission from "@/components/Mission";
import FAQ from "@/components/FAQ";
import GetStarted from "@/components/GetStarted";
import Footer from "@/components/Footer";

const COLORS = {
  hero: "#0a0a0a",
  ticker: "#fafafa",
  voyager: "#f2f2f2",
  howItWorks: "#f5f5f5",
  product: "#f5f5f5",
  security: "#f2f2f2",
  roadmap: "#f7f7f7",
  mission: "#f5f5f5",
  faq: "#f2f2f2",
  getStarted: "#fafafa",
  footer: "#000000",
} as const;

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <SectionBlend from={COLORS.hero} to={COLORS.ticker} />
      <LogoTicker />
      <VoyagerIntro />
      <SectionBlend from={COLORS.voyager} to={COLORS.howItWorks} />
      <HowItWorks />
      <SectionBlend from={COLORS.howItWorks} to={COLORS.product} />
      <Product />
      <SectionBlend from={COLORS.product} to={COLORS.security} />
      <Security />
      <SectionBlend from={COLORS.security} to={COLORS.roadmap} />
      <Roadmap />
      <SectionBlend from={COLORS.roadmap} to={COLORS.mission} />
      <Mission />
      <SectionBlend from={COLORS.mission} to={COLORS.faq} />
      <FAQ />
      <SectionBlend from={COLORS.faq} to={COLORS.getStarted} />
      <GetStarted />
      <SectionBlend from={COLORS.getStarted} to={COLORS.footer} />
      <Footer />
    </>
  );
}
