import {Component, OnInit} from '@angular/core';
import {Product} from '../product-model/product';
import {StoreService} from '../../store/store-service/store.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Store} from '../../store/store-model/store';

@Component({
  selector: 'app-product-customer',
  templateUrl: './product-customer.component.html',
  styleUrls: ['./product-customer.component.css']
})
export class ProductCustomerComponent implements OnInit {

  store: Store = new Store();
  products: Product[] = [];

  constructor(private storeService: StoreService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  private loadStore(idStore: number) {
    this.storeService
      .findById(idStore)
      .subscribe(data => {
        this.store = data;
      });

  }

  private getProducts(idStore: number) {
    this.storeService
      .getProducts(idStore)
      .subscribe(data => {
        this.products = data;
      });
  }

  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        this.loadStore(params.store);
        this.getProducts(params.store);
      });
  }

}
