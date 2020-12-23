import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GalleryService, PriceList } from 'src/shared/gallery.service';

@Component({
  selector: 'ns-pricelist',
  templateUrl: './pricelist.component.html',
  styleUrls: ['./pricelist.component.scss']
})
export class PricelistComponent implements OnInit {
  lashes$: Observable<PriceList[]>;
  eyebrows$: Observable<PriceList[]>;
  assumption: string = " zł (nowe założenie) / ";
  supplement: string = " zł (uzupełnienie)"
  constructor(private galleryService: GalleryService) { }


  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    this.lashes$ = this.galleryService.getByCategoryPrice("rzesy");
    this.eyebrows$ = this.galleryService.getByCategoryPrice("brwi");
  }

}
