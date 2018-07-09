import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourierCustomerComponent } from './courier-customer.component';

describe('CourierCustomerComponent', () => {
  let component: CourierCustomerComponent;
  let fixture: ComponentFixture<CourierCustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourierCustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourierCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
