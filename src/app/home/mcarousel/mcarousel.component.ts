import { Component, OnInit } from '@angular/core';
import Glide from '@glidejs/glide'
@Component({
  selector: 'ns-mcarousel',
  templateUrl: './mcarousel.component.html',
  styleUrls: ['./mcarousel.component.scss']
})
export class McarouselComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

 


    const config = {
      type: 'carousel',
      perView: '3',
      gap:'15',
      animationDuration:"800",
      breakpoints: {
        576: {
          perView: 1
        },
        992: {
          perView: 2
        },
      }
    }
    
    new Glide('.glide', config).mount()

  }



}
