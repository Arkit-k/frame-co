import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import BestsellerCarousel from "@/components/BestsellerCarousel";
import ScaleStrip from "@/components/ScaleStrip";
import NewArrivals from "@/components/NewArrivals";
import InspirationGallery from "@/components/InspirationGallery";
import MembershipBand from "@/components/MembershipBand";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-ivory text-charcoal">
      <Nav />
      <main>
        <Hero />
        <BestsellerCarousel />
        <ScaleStrip />
        <NewArrivals />
        <InspirationGallery />
      </main>
      <MembershipBand />
      <Footer />
    </div>
  );
}
