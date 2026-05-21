
import FloatingNavbar from "@/components/layout/FloatingNavBar";
import LiveViewerPill from "@/components/layout/LiveViewerPill";
import SpotCounterPill from "@/components/layout/SpotCounterPill";
import WelcomePopup from "@/components/layout/WelcomePopup";
import MapClient from "@/components/map/MapClient";
import { SpeedInsights } from '@vercel/speed-insights/next';

export default function Home() {
  return (
    <main className="relative h-screen w-screen overflow-hidden bg-black">
      <FloatingNavbar/>
      <SpotCounterPill/>
      <MapClient/>
      <WelcomePopup/>
      <SpeedInsights />
      <LiveViewerPill/>
    </main>
  );
}