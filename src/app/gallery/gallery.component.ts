import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../../shared';
import { Gallery } from '../models/Gallery'
import { GalleryImages } from '../models/GalleryImages';
declare var lightbox: any;

@Component({
  selector: 'ns-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  images$: GalleryImages[];

  constructor(private httpService: HttpService) { }




  ngOnInit(): void {

    function flattenGallery(data) {
      let combineGalleries = [];
      let galleriesLength = Object.keys(data).length;
      
      if (galleriesLength > 1) {

        for (let index = 0; index < galleriesLength; index++) {
          combineGalleries.push(data[index].imageurl)
        }

        let flatGallery = Array.prototype.concat.apply([], combineGalleries);
        return flatGallery;
      } 
      
      if(galleriesLength == 1) {
        return data[0].imageurl;
      }
      if(!galleriesLength) {
        return []
      }
    }



    lightbox.option({
      disableScrolling: true,
      wrapAround: true,
      showImageNumberLabel: false,
      alwaysShowNavOnTouchDevices: true
    });

    this.httpService.getAll().subscribe(data => {     
      this.images$ = flattenGallery(data);
    });
  }
}
