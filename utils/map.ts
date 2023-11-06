const GOOGLE_API_KEY = "AIzaSyDtNW5zAkUy_exZpTDoWFyMY7o_cNFUna4";

export function getMapPreview(lat: number, lng: number) {
  const imagePreviewURL = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=14&size=400x200&maptype=roadmap
  &markers=color:red%7Clabel:S%7C${lat},${lng}&key=${GOOGLE_API_KEY}`;
  return imagePreviewURL;
}