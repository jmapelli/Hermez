import {Category} from '../../category/category-model/category';

export class StoreRequest {
  id: number;
  name: string;
  description: string;
  logo: string;
  banner: string;
  address: string;
  lng: number;
  lat: number;
  price: number;
  category: Category;


  constructor() {
    this.category = new Category();
  }

}
