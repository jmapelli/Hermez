import {Component, OnInit} from '@angular/core';
import {CategoryService} from '../category-service/category.service';
import {Category} from '../category-model/category';

@Component({
  selector: 'app-category-customer',
  templateUrl: './category-customer.component.html',
  styleUrls: ['./category-customer.component.css']
})
export class CategoryCustomerComponent implements OnInit {

  categories: Category[] = [];

  constructor(private categoryService: CategoryService) {
  }

  private loadCategories() {
    this.categoryService
      .findAll()
      .subscribe(data => {
        this.categories = data;
      });
  }

  ngOnInit() {
    this.loadCategories();
  }

}
