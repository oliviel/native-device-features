interface IPlace {
  id: string;
  title: string;
  imageUri: string;
  address: string;
  location: { lat: string; lng: string };
}

class Place implements IPlace {
  id: string;
  title: string;
  imageUri: string;
  address: string;
  location: { lat: string; lng: string };
  constructor(
    title: string,
    imageUri: string,
    address: string,
    location: { lat: string; lng: string }
  ) {
    this.title = title;
    this.imageUri = imageUri;
    this.address = address;
    this.location = location;
    this.id = new Date().toString() + Math.random().toString();
  }
}
