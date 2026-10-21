import FloatingNavbar from "@/components/layout/FloatingNavBar";
import LiveViewerPill from "@/components/layout/LiveViewerPill";
import SpotCounterPill from "@/components/layout/SpotCounterPill";
import SupportPill from "@/components/layout/SupportPill";
import WelcomePopup from "@/components/layout/WelcomePopup";
import MapClient from "@/components/map/MapClient";
import { SpeedInsights } from '@vercel/speed-insights/next';
import { getPublishedSpots } from "@/lib/spots";

export default async function Home() {
  const spots = await getPublishedSpots();

  return (
    <main className="relative h-dvh w-screen overflow-hidden bg-black">
      <FloatingNavbar/>
      <SpotCounterPill spots={spots}/>
      <MapClient spots={spots}/>
      <WelcomePopup/>
      <SpeedInsights />
      <LiveViewerPill/>
      <SupportPill/>
    </main>
  );
}
