import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


export interface Gallery {
  id: number;
  imageUrl: string;
}

@Injectable()
export class GalleryService {

  constructor(private http: HttpClient) { }
  getAll(): Observable<Gallery[]> {
    return this.http.get<Gallery[]>('./assets/gallery.json');
  }
}
