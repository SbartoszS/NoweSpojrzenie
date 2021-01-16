import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {SingleOffer} from '../models/SingleOffer'
import {OfferTitle} from '../models/OfferTitle'
import {PriceList} from '../models/PriceList'
import {Gallery} from '../models/Gallery'



@Injectable()
export class HttpService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Gallery> {
    return this.http.get<Gallery>('../../assets/data/gallery.json');
  }

  getByCategoryPrice(category: string): Observable<PriceList[]> {
    return this.http.get<PriceList[]>('../../assets/data/price-list.json').pipe(
      map(products => products.filter(p => p.category_pricelist.includes(category))));
  }

  getAllOffersByCategory(category: string): Observable<SingleOffer[]> {
    return this.http.get<SingleOffer[]>('../../assets/data/offerList.json').pipe(
      map(list => list.filter(p => p.category_mainoffer.includes(category))));
  }
  getAllOffersTitleByCategory(category: string): Observable<OfferTitle[]> {
    return this.http.get<OfferTitle[]>('../../assets/data/offerTitle.json').pipe(
      map(data => data.filter(p => p.category_offer.includes(category))));
  }

}
