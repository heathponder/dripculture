import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Story from "@/components/Story";
import Stats from "@/components/Stats";
import Menu from "@/components/Menu";
import Space from "@/components/Space";
import Promo from "@/components/Promo";
import Reviews from "@/components/Reviews";
import Visit from "@/components/Visit";
import Footer from "@/components/Footer";
import ScrollColorShift from "@/components/ScrollColorShift";

export default function Home() {
  return (
    <>
      <ScrollColorShift />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Story />
        <Stats />
        <Menu />
        <Space />
        <Promo />
        <Reviews />
        <Visit />
      </main>
      <Footer />
    </>
  );
}
