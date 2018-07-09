import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseCustomerComponent } from './purchase-customer.component';

describe('PurchaseCustomerComponent', () => {
  let component: PurchaseCustomerComponent;
  let fixture: ComponentFixture<PurchaseCustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchaseCustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
