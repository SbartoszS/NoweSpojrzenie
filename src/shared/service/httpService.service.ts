import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SingleOffer } from '../models/SingleOffer'
import { OfferTitle } from '../models/OfferTitle'
import { PriceList } from '../models/PriceList'
import { Gallery } from '../models/Gallery'



@Injectable()
export class HttpService {

 url = 'https://nspojrzenie.pl/zaplecze00/wp-json/wp/v2/';
 perPage = '?per_page=100&order=asc'

  constructor(private http: HttpClient) { }

  getAll(): Observable<Gallery> {
    return this.http.get<Gallery>(`${this.url}gallery${this.perPage}`);
  }

  getByCategoryPrice(category: string): Observable<PriceList[]> {
    return this.http.get<PriceList[]>(`${this.url}pricelist${this.perPage}`).pipe(
      map(products => products.filter(p => p.category_pricelist.includes(category))));
  }

  getAllOffersByCategory(category: string): Observable<SingleOffer[]> {
    return this.http.get<SingleOffer[]>(`${this.url}mainOffer${this.perPage}`).pipe(
      map(list => list.filter(p => p.category_mainoffer.includes(category))));
  }
  getAllOffersTitleByCategory(category: string): Observable<OfferTitle[]> {
    return this.http.get<OfferTitle[]>(`${this.url}offerstitle${this.perPage}`).pipe(
      map(data => data.filter(p => p.category_offer.includes(category))));
  }

}
