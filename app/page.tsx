import Image from "next/image";
import HeroSection from "./components/HeroSection";
import FeatureCources from "./components/FeatureCources";
import WhyChoseUs from "./components/WhyChoseUs";
import TestimonialCards from "./components/TestimonialCards";
import UpcomingWebinar from "./components/UpcomingWebinar";
import Instucters from "./components/Instucters";
import Footer from "./components/Footer";

export default function Home() {
  return (
    // <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      {/* <h1 className="text-2xl text-center">Hee Div </h1> */}
      <HeroSection />
      <FeatureCources />
      <WhyChoseUs />
      <TestimonialCards />
      <UpcomingWebinar />
      <Instucters />
      <Footer />
    </main>
  );
}
