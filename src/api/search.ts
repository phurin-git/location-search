import type { Place } from './Place';

interface SearchResponse {
  features: Feature[]
}

interface Feature {
  geometry: Geometry
  properties: Properties
}

interface Geometry {
  coordinates: number[];
}
interface Properties {
  place_id: number;
  display_name: string;
}

export const search = async (term: string) => {
  const res = await fetch(`https://nominatim.openstreetmap.org/search?q=${term}&format=geojson&addressdetails=1&limit=5&layer=address`);
  const data: SearchResponse = await res.json();
  const places: Place[] = data.features.map((feature) => {
    return {
      id: feature.properties.place_id,
      name: feature.properties.display_name,
      longitude: feature.geometry.coordinates[0],
      latitude: feature.geometry.coordinates[1]
    }
  });
  return places;
}