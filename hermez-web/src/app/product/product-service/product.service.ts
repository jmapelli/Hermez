import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {Product} from '../product-model/product';
import { ProductRequest } from '../product-model/ProductRequest';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private path = environment.api + '/api/products';

  constructor(private http: HttpClient) {
  }

  public findAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.path);
  }
  public findAllProductRequest(): Observable<ProductRequest[]> {
    return this.http.get<ProductRequest[]>(this.path);
  }

  public save(product: Product): Observable<Product> {
    return this.http.post<Product>(this.path, product);
  }
  public saveProductRequest(product: ProductRequest): Observable<ProductRequest> {
    return this.http.post<ProductRequest>(this.path, product);
  }

  public update(product: Product): Observable<Product> {
    return this.http.put<Product>(this.path + '/' + product.id, product);
  }
  public updateProductRequest(product: ProductRequest): Observable<ProductRequest> {
    return this.http.put<ProductRequest>(this.path + '/' + product.id, product);
  }

  public delete(product: Product): Observable<Product> {
    return this.http.delete<Product>(this.path + '/' + product.id);
  }
  public deleteProductRequest(product: ProductRequest): Observable<ProductRequest> {
    return this.http.delete<ProductRequest>(this.path + '/' + product.id);
  }

  public findById(idProduct: number): Observable<Product> {
    return this.http.get<Product>(this.path + '/' + idProduct);
  }
}
