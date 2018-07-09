import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Store} from '../store-model/store';
import {Product} from '../../product/product-model/product';
import { StoreRequest } from '../store-model/StoreRequest';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private path = environment.api + '/api/stores';

  constructor(private http: HttpClient) {
  }

  public findAll(): Observable<Store[]> {
    return this.http.get<Store[]>(this.path);
  }
  public findAllStoreRequest(): Observable<StoreRequest[]> {
    return this.http.get<StoreRequest[]>(this.path);
  }

  public save(store: Store): Observable<Store> {
    return this.http.post<Store>(this.path, store);
  }
  public saveStoreRequest(store: StoreRequest): Observable<StoreRequest> {
    return this.http.post<StoreRequest>(this.path, store);
  }

  public update(store: Store): Observable<Store> {
    return this.http.put<Store>(this.path + '/' + store.id, store);
  }
  public updateStoreRequest(store: StoreRequest): Observable<StoreRequest> {
    return this.http.put<StoreRequest>(this.path + '/' + store.id, store);
  }

  public delete(store: Store): Observable<Store> {
    return this.http.delete<Store>(this.path + '/' + store.id);
  }
  public deleteStoreRequest(store: StoreRequest): Observable<StoreRequest> {
    return this.http.delete<StoreRequest>(this.path + '/' + store.id);
  }

  public findById(idStore: number): Observable<Store> {
    return this.http.get<Store>(this.path + '/' + idStore);
  }

  public getProducts(idStore: number): Observable<Product[]> {
    return this.http.get<Product[]>(this.path + '/' + idStore + '/products');
  }
}
