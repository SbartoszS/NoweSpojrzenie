import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GalleryService, Gallery } from '../../shared';

declare var lightbox: any;

@Component({
  selector: 'ns-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  images$: Observable<Gallery[]>;

  constructor(private galleryService: GalleryService) { }

  ngOnInit(): void {
    lightbox.option({
      disableScrolling: true,
      wrapAround: true,
      showImageNumberLabel: false
    });
  }

  ngAfterViewInit(): void {
    this.images$ = this.galleryService.getAll();
    this.galleryService.getAll().subscribe((resp: any) => {
      console.log(resp);
    });
  }
}
