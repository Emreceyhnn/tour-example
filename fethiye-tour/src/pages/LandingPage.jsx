import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import RoutesSection from "../components/RoutesSection";
import WhatsIncluded from "../components/WhatsIncluded";
import GallerySection from "../components/GallerySection";
import TestimonialsSection from "../components/TestimonialsSection";
import BookingCTA from "../components/BookingCTA";
import Footer from "../components/Footer";

export default function LandingPage() {
  return (
    <>
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
