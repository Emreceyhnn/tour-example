import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import RoutesSection from "../components/RoutesSection";
import WhatsIncluded from "../components/WhatsIncluded";
import GallerySection from "../components/GallerySection";
import TestimonialsSection from "../components/TestimonialsSection";
import BookingCTA from "../components/BookingCTA";
import Footer from "../components/Footer";
import SEO from "../components/SEO";

export default function LandingPage() {
  return (
    <>
      <SEO titleKey="seo.home.title" descKey="seo.home.desc" canonical="/" />
      <Navbar />
      <main>
        <HeroSection />
        <RoutesSection />
        <WhatsIncluded />
        <GallerySection />
        <TestimonialsSection />
        <BookingCTA />
      </main>
      <Footer />
    </>
  );
}
