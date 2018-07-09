import {Component, OnInit, TemplateRef} from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {Purchase} from '../purchase-model/purchase';
import {Card} from '../../card/card-model/card';
import {Router} from '@angular/router';
import {CardService} from '../../card/card-service/card.service';
import {PurchaseService} from '../purchase-service/purchase.service';

@Component({
  selector: 'app-courier-customer',
  templateUrl: './courier-customer.component.html',
  styleUrls: ['./courier-customer.component.css']
})
export class CourierCustomerComponent implements OnInit {

  modal: BsModalRef;
  purchase: Purchase = new Purchase();
  cards: Card[] = [];

  constructor(private cardService: CardService,
              private purchaseService: PurchaseService,
              private router: Router,
              private modalService: BsModalService) {
  }

  private loadCards() {
    this.cardService
      .findAll()
      .subscribe(data => {
        this.cards = data;

        this.purchase.card = this.cards[0].number;
      });
  }

  public submit(template: TemplateRef<any>) {
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
    this.purchase.total = 15;
    this.purchase.detail = 'Envío de paquete';
    this.loadCards();
  }

}
