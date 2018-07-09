import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Card} from '../card-model/card';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  private path = environment.api + '/api/cards';

  constructor(private http: HttpClient) {
  }

  public findAll(): Observable<Card[]> {
    return this.http.get<Card[]>(this.path);
  }

  public save(card: Card): Observable<Card> {
    return this.http.post<Card>(this.path, card);
  }

  public delete(card: Card): Observable<Card> {
    return this.http.delete<Card>(this.path + '/' + card.id);
  }

}
