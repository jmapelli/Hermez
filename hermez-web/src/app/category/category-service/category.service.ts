import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Category} from '../category-model/category';
import {environment} from '../../../environments/environment';
import {Store} from '../../store/store-model/store';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private path = environment.api + '/api/categories';

  constructor(private http: HttpClient) {
  }

  public findAll(): Observable<Category[]> {
    return this.http.get<Category[]>(this.path);
  }

  public save(category: Category): Observable<Category> {
    return this.http.post<Category>(this.path, category);
  }

  public update(category: Category): Observable<Category> {
    return this.http.put<Category>(this.path + '/' + category.id, category);
  }

  public delete(category: Category): Observable<Category> {
    return this.http.delete<Category>(this.path + '/' + category.id);
  }

  public getStores(idCategory: number): Observable<Store[]> {
    return this.http.get<Store[]>(this.path + '/' + idCategory + '/stores');
  }

}
