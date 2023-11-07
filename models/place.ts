export interface IPlace {
  id: string;
  title: string;
  imageUri: string;
  address: string;
  location: { lat: number; lng: number };
}

export class Place implements IPlace {
  id: string;
  title: string;
  imageUri: string;
  address: string;
  location: { lat: number; lng: number };
  constructor(
    title: string,
    imageUri: string,
    address: string,
    location: { lat: number; lng: number }
  ) {
    this.title = title;
    this.imageUri = imageUri;
    this.address = address;
    this.location = location;
    this.id = new Date().toString() + Math.random().toString();
  }
}
