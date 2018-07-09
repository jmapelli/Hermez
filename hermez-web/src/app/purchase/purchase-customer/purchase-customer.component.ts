import {Component, OnInit} from '@angular/core';
import {PurchaseService} from '../purchase-service/purchase.service';
import {Purchase} from '../purchase-model/purchase';

@Component({
  selector: 'app-purchase-customer',
  templateUrl: './purchase-customer.component.html',
  styleUrls: ['./purchase-customer.component.css']
})
export class PurchaseCustomerComponent implements OnInit {

  purchases: Purchase[] = [];

  constructor(private purchaseSerice: PurchaseService) {
  }

  private loadPurchases() {
    this.purchaseSerice
      .findAll()
      .subscribe(data => {
        this.purchases = data;
      });
  }

  ngOnInit() {
    this.loadPurchases();
  }

}
