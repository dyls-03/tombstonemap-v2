export type Spot = {
    name: string;
    region: string;
    country: string;
    type: string;
    lat: number;
    lng: number;
    notes?: string;
    tags?: string[];
  };