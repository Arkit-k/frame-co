import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import FeaturedCollections from "@/components/FeaturedCollections";
import GalleryRow from "@/components/GalleryRow";
import EditorialSection from "@/components/EditorialSection";
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
        <FeaturedCollections />
        <GalleryRow />
        <EditorialSection />
        <ScaleStrip />
        <NewArrivals />
        <InspirationGallery />
      </main>
      <MembershipBand />
      <Footer />
    </div>
  );
}
