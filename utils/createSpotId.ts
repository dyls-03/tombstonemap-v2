export function createSpotId(late: number, lng: number) {
    return `${late.toFixed(5)}-${lng.toFixed(5)}`.replaceAll(".", "p");
}