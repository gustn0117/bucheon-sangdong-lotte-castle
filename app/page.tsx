import Header from "./components/Header";
import Hero from "./components/Hero";
import EventBanner from "./components/EventBanner";
import Intro from "./components/Intro";
import Location from "./components/Location";
import MasterPlan from "./components/MasterPlan";
import FloorPlans from "./components/FloorPlans";
import Community from "./components/Community";
import Info from "./components/Info";
import Register from "./components/Register";
import Footer from "./components/Footer";
import FloatingCta from "./components/FloatingCta";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <EventBanner />
        <Intro />
        <Location />
        <MasterPlan />
        <FloorPlans />
        <Community />
        <Info />
        <Register />
      </main>
      <Footer />
      <FloatingCta />
    </>
  );
}
