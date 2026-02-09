import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SectionBlend from "@/components/SectionBlend";
import VoyagerIntro from "@/components/VoyagerIntro";
import Product from "@/components/Product";
import Security from "@/components/Security";
import Mission from "@/components/Mission";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const COLORS = {
  hero: "#0a0a0a",
  voyager: "#f2f2f2",
  product: "#f5f5f5",
  security: "#f2f2f2",
  mission: "#f5f5f5",
  faq: "#f2f2f2",
  footer: "#0a0a0a",
} as const;

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <SectionBlend from={COLORS.hero} to={COLORS.voyager} />
      <VoyagerIntro />
      <SectionBlend from={COLORS.voyager} to={COLORS.product} />
      <Product />
      <SectionBlend from={COLORS.product} to={COLORS.security} />
      <Security />
      <SectionBlend from={COLORS.security} to={COLORS.mission} />
      <Mission />
      <SectionBlend from={COLORS.mission} to={COLORS.faq} />
      <FAQ />
      <SectionBlend from={COLORS.faq} to={COLORS.footer} />
      <Footer />
    </>
  );
}
