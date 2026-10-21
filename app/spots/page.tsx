import SpotsBrowser from "@/components/spots/SpotsBrowser";
import { getPublishedSpots } from "@/lib/spots";

export default async function SpotsPage() {
  const spots = await getPublishedSpots();

  return <SpotsBrowser spots={spots} />;
}
