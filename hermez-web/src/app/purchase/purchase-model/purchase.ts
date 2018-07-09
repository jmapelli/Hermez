export class Purchase {
  id: number;
  date: Date;
  detail: string;
  comment: string;
  card: string;
  quantity: number;
  price: number;
  subtotal: number;
  total: number;

  nameOrigin: String;
  docOrigin: String;
  phoneOrigin: String;
  addressOrigin: string;

  nameArrival: String;
  docArrival: String;
  phoneArrival: String;
  addressArrival: string;

  constructor() {
    this.quantity = 1;
    this.subtotal = 0;
  }
}
