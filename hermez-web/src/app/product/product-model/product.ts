import { Store } from '../../store/store-model/store';

export class Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  store: Store;

  constructor() {
    this.store = new Store();
  }
}
