
import FloatingNavbar from "@/components/layout/FloatingNavBar";
import WelcomePopup from "@/components/layout/WelcomePopup";
import MapClient from "@/components/map/MapClient";
import { SpeedInsights } from '@vercel/speed-insights/next';

export default function Home() {
  return (
    <main className="relative h-screen w-screen overflow-hidden bg-black">
      <FloatingNavbar />
      <MapClient />
      <WelcomePopup />
      <SpeedInsights />
    </main>
  );
}