import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {SingleOffer} from '../app/models/SingleOffer'
import {OfferTitle} from '../app/models/OfferTitle'
import {PriceList} from '../app/models/PriceList'
import {Gallery} from '../app/models/Gallery'



@Injectable()
export class HttpService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Gallery> {
    return this.http.get<Gallery>('http://localhost/wordpress/wp-json/wp/v2/gallery');
  }

  getByCategoryPrice(category: string): Observable<PriceList[]> {
    return this.http.get<PriceList[]>('http://localhost/wordpress/wp-json/wp/v2/pricelist').pipe(
      map(products => products.filter(p => p.category_pricelist.includes(category))));
  }

  getAllOffersByCategory(category: string): Observable<SingleOffer[]> {
    return this.http.get<SingleOffer[]>('http://localhost/wordpress/wp-json/wp/v2/mainoffer').pipe(
      map(list => list.filter(p => p.category_mainoffer.includes(category))));
  }
  getAllOffersTitleByCategory(category: string): Observable<OfferTitle[]> {
    return this.http.get<OfferTitle[]>('http://localhost/wordpress/wp-json/wp/v2/offerstitle').pipe(
      map(data => data.filter(p => p.category_offer.includes(category))));
  }

}
