import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {Purchase} from '../purchase-model/purchase';

@Injectable({
  providedIn: 'root'
})
export class PurchaseService {

  private path = environment.api + '/api/purchases';

  constructor(private http: HttpClient) {
  }

  public findAll(): Observable<Purchase[]> {
    return this.http.get<Purchase[]>(this.path);
  }

  public save(purchase: Purchase): Observable<Purchase> {
    return this.http.post<Purchase>(this.path, purchase);
  }

  public findById(idPurchase: number): Observable<Purchase> {
    return this.http.get<Purchase>(this.path + '/' + idPurchase);
  }

}
