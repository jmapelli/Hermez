import {Component, OnInit, TemplateRef} from '@angular/core';
import {Product} from '../../product/product-model/product';
import {ProductService} from '../../product/product-service/product.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Purchase} from '../purchase-model/purchase';
import {CardService} from '../../card/card-service/card.service';
import {Card} from '../../card/card-model/card';
import {PurchaseService} from '../purchase-service/purchase.service';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';

@Component({
  selector: 'app-delivery-customer',
  templateUrl: './delivery-customer.component.html',
  styleUrls: ['./delivery-customer.component.css']
})
export class DeliveryCustomerComponent implements OnInit {

  modal: BsModalRef;
  product: Product = new Product();
  purchase: Purchase = new Purchase();
  cards: Card[] = [];

  constructor(private productService: ProductService,
              private cardService: CardService,
              private purchaseService: PurchaseService,
              private router: Router,
              private route: ActivatedRoute,
              private modalService: BsModalService) {
  }

  private loadProduct(idProduct: number) {
    this.productService
      .findById(idProduct)
      .subscribe(data => {
        this.product = data;

        this.calcSubtotal();
        this.calcTotal();
      });
  }

  private loadCards() {
    this.cardService
      .findAll()
      .subscribe(data => {
        this.cards = data;

        this.purchase.card = this.cards[0].number;
      });
  }

  public onChangeQuantity() {
    this.calcSubtotal();
    this.calcTotal();
  }

  private calcSubtotal() {
    this.purchase.subtotal = this.product.price * this.purchase.quantity;
  }

  private calcTotal() {
    this.purchase.total = this.purchase.subtotal + this.product.store.price;
  }

  public submit(template: TemplateRef<any>) {
    this.purchase.detail = this.product.name;
    this.purchase.price = this.product.price;
    this.purchase.addressOrigin = this.product.store.address;

    this.purchaseService
      .save(this.purchase)
      .subscribe(() => {
        this.success(template);
      });
  }

  private success(template: TemplateRef<any>) {
    this.modal = this.modalService.show(template, {
      keyboard: false,
      backdrop: 'static'
    });

    this.router.navigate(['/history']);
  }

  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        this.loadProduct(params.product);
      });

    this.loadCards();
  }

}
