import CursorGlow from "./components/CursorGlow";
import Nav from "./components/Nav";
import HeroProducts from "./components/HeroProducts";
import TrustStrip from "./components/TrustStrip";
import ProductDownloads from "./components/products/ProductDownloads";
import FeaturesGrid from "./components/FeaturesGrid";
import ManifestoSection from "./components/ManifestoSection";
import DocsPreview from "./components/DocsPreview";
import SupportHub from "./components/SupportHub";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <CursorGlow />
      <Nav />
      <main>
        <HeroProducts />
        <TrustStrip />
        <ProductDownloads />
        <FeaturesGrid />
        <ManifestoSection />
        <DocsPreview />
        <SupportHub />
      </main>
      <Footer />
    </>
  );
}
