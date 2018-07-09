import {Component, OnInit, TemplateRef} from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {ProductService} from '../product-service/product.service';
import {ProductRequest} from '../product-model/ProductRequest';
import {StoreService} from '../../store/store-service/store.service';
import {Store} from '../../store/store-model/store';

@Component({
  selector: 'app-product-admin',
  templateUrl: './product-admin.component.html',
  styleUrls: ['./product-admin.component.css']
})
export class ProductAdminComponent implements OnInit {

  modal: BsModalRef;
  products: ProductRequest[] = [];
  stores: Store[] = [];
  product: ProductRequest = new ProductRequest();
  error: Boolean = false;

  constructor(private storeService: StoreService,
              private productService: ProductService,
              private modalService: BsModalService) {
  }


  private loadProducts() {
    this.productService
      .findAllProductRequest()
      .subscribe(data => {
        this.products = data;
      });
  }

  private loadStores() {
    this.storeService
      .findAll()
      .subscribe(data => {
        this.stores = data;
      });
  }

  public openModal(template: TemplateRef<any>, product: ProductRequest) {
    this.product = product ? product : new ProductRequest();
    this.modal = this.modalService.show(template, {
      keyboard: false,
      backdrop: 'static'
    });
  }

  public submit() {
    this.error = false;
    if (!this.product.id) {
      this.save();
    } else {
      this.edit();
    }
  }

  public delete() {
    this.error = false;

    this.productService
      .deleteProductRequest(this.product)
      .subscribe(() => {
        this.success();
      }, () => {
        this.failed();
      });
  }

  private save() {
    this.productService
      .saveProductRequest(this.product)
      .subscribe(() => {
        this.success();
      }, () => {
        this.failed();
      });
  }

  private edit() {
    this.productService
      .updateProductRequest(this.product)
      .subscribe(() => {
        this.success();
      }, () => {
        this.failed();
      });
  }

  private success() {
    this.modal.hide();
    this.loadProducts();
  }

  private failed() {
    this.error = true;
  }

  ngOnInit() {
    this.loadStores();
    this.loadProducts();
  }
}
