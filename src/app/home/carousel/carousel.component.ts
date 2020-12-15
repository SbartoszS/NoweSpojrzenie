import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'ns-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(document).ready(function() {
      $("#carouselExampleIndicators").swiperight(function() {
         $(this).carousel('prev');
       });
      $("#carouselExampleIndicators").swipeleft(function() {
         $(this).carousel('next');
      });
   });
  }

}
