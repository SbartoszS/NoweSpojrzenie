import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {SingleOffer} from '../app/models/SingleOffer'
import {OfferTitle} from '../app/models/OfferTitle'

export interface Gallery {
  id: number;
  imageUrl: string;
}

export interface PriceList {
  id: number;
  name: string,
  price: number,
  supplementPrice: number,
  categories: string,
  double: boolean
}

@Injectable()
export class HttpService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Gallery[]> {
    return this.http.get<Gallery[]>('./assets/gallery.json');
  }

  getAllPrice(): Observable<PriceList[]> {
    return this.http.get<PriceList[]>('./assets/price-list.json');
  }

  getByCategoryPrice(category: string): Observable<PriceList[]> {
    return this.http.get<PriceList[]>('./assets/price-list.json').pipe(
      map(products => products.filter(p => p.categories.includes(category))));
  }

  getAllOffersByCategory(category: string): Observable<SingleOffer[]> {
    return this.http.get<SingleOffer[]>('./assets/offerList.json').pipe(
      map(list => list.filter(p => p.category.includes(category))));
  }
  getAllOffersTitleByCategory(category: string): Observable<OfferTitle[]> {
    return this.http.get<OfferTitle[]>('./assets/offerTitle.json').pipe(
      map(data => data.filter(p => p.category.includes(category))));
  }
}
