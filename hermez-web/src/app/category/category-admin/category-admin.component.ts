import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {Category} from '../category-model/category';
import {CategoryService} from '../category-service/category.service';

@Component({
  selector: 'app-category-admin',
  templateUrl: './category-admin.component.html',
  styleUrls: ['./category-admin.component.css']
})
export class CategoryAdminComponent implements OnInit {

  modal: BsModalRef;
  categories: Category[] = [];
  category: Category = new Category();
  error: Boolean = false;

  constructor(private categoryService: CategoryService,
              private modalService: BsModalService) {
  }

  private loadCategories() {
    this.categoryService
      .findAll()
      .subscribe(data => {
        this.categories = data;
      });
  }

  public openModal(template: TemplateRef<any>, category: Category) {
    this.category = category ? category : new Category();
    this.modal = this.modalService.show(template, {
      keyboard: false,
      backdrop: 'static'
    });
  }

  public submit() {
    this.error = false;

    if (!this.category.id) {
      this.save();
    } else {
      this.edit();
    }
  }

  public delete() {
    this.error = false;

    this.categoryService
      .delete(this.category)
      .subscribe(() => {
        this.success();
      }, () => {
        this.failed();
      });
  }

  private save() {
    this.categoryService
      .save(this.category)
      .subscribe(() => {
        this.success();
      }, () => {
        this.failed();
      });
  }

  private edit() {
    this.categoryService
      .update(this.category)
      .subscribe(() => {
        this.success();
      }, () => {
        this.failed();
      });
  }

  private success() {
    this.modal.hide();
    this.loadCategories();
  }

  private failed() {
    this.error = true;
  }

  ngOnInit() {
    this.loadCategories();
  }

}
