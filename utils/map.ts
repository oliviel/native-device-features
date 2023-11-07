const API_KEY = process.env.EXPO_PUBLIC_GOOGLE_API_KEY;

export async function getAddress(lat: number, lng: number): Promise<string> {
  const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${API_KEY}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch");
  }

  const data = await response.json();
  const address = data.results[0].formatted_address;
  return address;
}
