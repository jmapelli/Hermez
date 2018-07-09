export class Store {
  id: number;
  name: string;
  description: string;
  logo: string;
  banner: string;
  address: string;
  lng: string;
  lat: string;
  price: number;

  constructor() {
    this.banner = '';
  }
}
