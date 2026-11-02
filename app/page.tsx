import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import GalleryRow from "@/components/GalleryRow";
import ScaleStrip from "@/components/ScaleStrip";
import NewArrivals from "@/components/NewArrivals";
import MaterialStrip from "@/components/MaterialStrip";
import MembershipBand from "@/components/MembershipBand";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-wall text-ink">
      <Nav />
      <main>
        <Hero />
        <GalleryRow />
        <ScaleStrip />
        <NewArrivals />
        <MaterialStrip />
      </main>
      <MembershipBand />
      <Footer />
    </div>
  );
}
