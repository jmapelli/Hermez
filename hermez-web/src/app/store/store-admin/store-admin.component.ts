import {Component, OnInit, TemplateRef} from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {Store} from '../store-model/store';
import {StoreService} from '../store-service/store.service';
import {StoreRequest} from '../store-model/StoreRequest';
import {CategoryService} from '../../category/category-service/category.service';
import {Category} from '../../category/category-model/category';

@Component({
  selector: 'app-store-admin',
  templateUrl: './store-admin.component.html',
  styleUrls: ['./store-admin.component.css']
})
export class StoreAdminComponent implements OnInit {

  modal: BsModalRef;
  stores: StoreRequest[] = [];
  categories: Category[] = [];
  store: StoreRequest = new StoreRequest();
  error: Boolean = false;

  constructor(private categoryService: CategoryService,
              private storeService: StoreService,
              private modalService: BsModalService) {
  }

  private loadStores() {
    this.storeService
      .findAllStoreRequest()
      .subscribe(data => {
        this.stores = data;
      });
  }

  private loadCategories() {
    this.categoryService
      .findAll()
      .subscribe(data => {
        this.categories = data;
      });
  }

  public openModal(template: TemplateRef<any>, store: StoreRequest) {
    this.store = store ? store : new StoreRequest();
    this.modal = this.modalService.show(template, {
      keyboard: false,
      backdrop: 'static'
    });
  }

  public submit() {
    this.error = false;
    if (!this.store.id) {
      this.save();
    } else {
      this.edit();
    }
  }

  public delete() {
    this.error = false;

    this.storeService
      .deleteStoreRequest(this.store)
      .subscribe(() => {
        this.success();
      }, () => {
        this.failed();
      });
  }

  private save() {
    this.storeService
      .saveStoreRequest(this.store)
      .subscribe(() => {
        this.success();
      }, () => {
        this.failed();
      });
  }

  private edit() {
    this.storeService
      .updateStoreRequest(this.store)
      .subscribe(() => {
        this.success();
      }, () => {
        this.failed();
      });
  }

  private success() {
    this.modal.hide();
    this.loadStores();
  }

  private failed() {
    this.error = true;
  }

  ngOnInit() {
    this.loadCategories();
    this.loadStores();
  }
}
