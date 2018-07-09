import {Component, OnInit} from '@angular/core';
import {Store} from '../store-model/store';
import {ActivatedRoute, Router} from '@angular/router';
import {CategoryService} from '../../category/category-service/category.service';

@Component({
  selector: 'app-store-customer',
  templateUrl: './store-customer.component.html',
  styleUrls: ['./store-customer.component.css']
})
export class StoreCustomerComponent implements OnInit {

  stores: Store[] = [];

  constructor(private categoryService: CategoryService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  private loadStores() {
    this.route.queryParams
      .subscribe(params => {
        this.getStores(params.category);
      });
  }

  private getStores(idCategory: number) {
    this.categoryService
      .getStores(idCategory)
      .subscribe(data => {
        this.stores = data;
      });
  }

  ngOnInit() {
    this.loadStores();
  }

}
