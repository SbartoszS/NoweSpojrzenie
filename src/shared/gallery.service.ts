import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


export interface Gallery {
  id: number;
  imageUrl: string;
}

export interface PriceList {
  id: number;
  name: string,
  price: number,
  supplementPrice: number,
  categories: string
}

@Injectable()
export class GalleryService {

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
}
