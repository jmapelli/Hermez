import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {ModalModule} from 'ngx-bootstrap';
import {NgxMaskModule} from 'ngx-mask';

import {AppComponent} from './app.component';
import {AuthSigninComponent} from './auth/auth-signin/auth-signin.component';
import {AuthSignupComponent} from './auth/auth-signup/auth-signup.component';
import {AuthGuard} from './auth/auth-guard/auth.guard';
import {HeaderAdminComponent} from './template/header-admin/header-admin.component';
import {HeaderCustomerComponent} from './template/header-customer/header-customer.component';
import {FooterCustomerComponent} from './template/footer-customer/footer-customer.component';
import {CategoryCustomerComponent} from './category/category-customer/category-customer.component';
import {CategoryAdminComponent} from './category/category-admin/category-admin.component';
import {AuthInterceptor} from './auth/auth-interceptor/auth-interceptor';
import {StoreAdminComponent} from './store/store-admin/store-admin.component';
import {ProductAdminComponent} from './product/product-admin/product-admin.component';
import {StoreCustomerComponent} from './store/store-customer/store-customer.component';
import {ProductCustomerComponent} from './product/product-customer/product-customer.component';
import {DeliveryCustomerComponent} from './purchase/delivery-customer/delivery-customer.component';
import {CourierCustomerComponent} from './purchase/courier-customer/courier-customer.component';
import {CardCustomerComponent} from './card/card-customer/card-customer.component';
import {PurchaseCustomerComponent} from './purchase/purchase-customer/purchase-customer.component';


const routes: Routes = [
  {path: 'signin', component: AuthSigninComponent},
  {path: 'signup', component: AuthSignupComponent},
  {path: 'admin', component: CategoryAdminComponent, canActivate: [AuthGuard]},
  {path: 'admin/categories', component: CategoryAdminComponent, canActivate: [AuthGuard]},
  {path: 'admin/stores', component: StoreAdminComponent, canActivate: [AuthGuard]},
  {path: 'admin/products', component: ProductAdminComponent, canActivate: [AuthGuard]},
  {path: '', component: CategoryCustomerComponent, canActivate: [AuthGuard]},
  {path: 'stores', component: StoreCustomerComponent, canActivate: [AuthGuard]},
  {path: 'products', component: ProductCustomerComponent, canActivate: [AuthGuard]},
  {path: 'delivery', component: DeliveryCustomerComponent, canActivate: [AuthGuard]},
  {path: 'courier', component: CourierCustomerComponent, canActivate: [AuthGuard]},
  {path: 'cards', component: CardCustomerComponent, canActivate: [AuthGuard]},
  {path: 'history', component: PurchaseCustomerComponent, canActivate: [AuthGuard]}

];

@NgModule({
  declarations: [
    AppComponent,
    AuthSignupComponent,
    AuthSigninComponent,
    HeaderCustomerComponent,
    HeaderAdminComponent,
    FooterCustomerComponent,
    CategoryAdminComponent,
    CategoryCustomerComponent,
    StoreAdminComponent,
    ProductAdminComponent,
    StoreCustomerComponent,
    ProductCustomerComponent,
    DeliveryCustomerComponent,
    CourierCustomerComponent,
    CardCustomerComponent,
    PurchaseCustomerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ModalModule.forRoot(),
    NgxMaskModule.forRoot(),
    RouterModule.forRoot(routes)
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
