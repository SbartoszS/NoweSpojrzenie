import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService, Gallery } from '../../shared';

declare var lightbox: any;

@Component({
  selector: 'ns-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  images$: Observable<Gallery[]>;

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    lightbox.option({
      disableScrolling: true,
      wrapAround: true,
      showImageNumberLabel: false,
      alwaysShowNavOnTouchDevices: true
    });

    this.httpService.getAll().subscribe((data: any) => {
      this.images$ = data;
    });
  }
}
