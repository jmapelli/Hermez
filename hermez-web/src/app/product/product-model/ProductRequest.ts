import {Store} from '../../store/store-model/store';

export class ProductRequest {
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
