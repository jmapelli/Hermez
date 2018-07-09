import {Component, OnInit, TemplateRef} from '@angular/core';
import {Card} from '../card-model/card';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {CardService} from '../card-service/card.service';
import {Category} from '../../category/category-model/category';

@Component({
  selector: 'app-card-customer',
  templateUrl: './card-customer.component.html',
  styleUrls: ['./card-customer.component.css']
})
export class CardCustomerComponent implements OnInit {

  modal: BsModalRef;
  cards: Card[] = [];
  card: Card = new Card();
  error: Boolean = false;

  constructor(private cardService: CardService,
              private modalService: BsModalService) {
  }

  private loadCards() {
    this.cardService
      .findAll()
      .subscribe(data => {
        this.cards = data;
      });
  }

  public openModal(template: TemplateRef<any>, card: Card) {
    this.card = card ? card : new Card();
    this.modal = this.modalService.show(template, {
      keyboard: false,
      backdrop: 'static'
    });
  }

  public submit() {
    if (!this.card.id) {
      this.save();
    }
  }

  private save() {
    this.error = false;

    this.cardService
      .save(this.card)
      .subscribe(() => {
        this.success();
      }, () => {
        this.failed();
      });
  }

  public delete() {
    this.error = false;

    this.cardService
      .delete(this.card)
      .subscribe(() => {
        this.success();
      }, () => {
        this.failed();
      });
  }

  private success() {
    this.modal.hide();
    this.loadCards();
  }

  private failed() {
    this.error = true;
  }

  ngOnInit() {
    this.loadCards();
  }

}
