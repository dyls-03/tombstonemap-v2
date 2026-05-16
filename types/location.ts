export type Spot = {
    name: string;
    region: string;
    country: string;
    type: string;
    lat: number;
    lng: number;
    heights?: number[];
    tags?: string[];
    notes?: string;
    accessNotes?: string;
};