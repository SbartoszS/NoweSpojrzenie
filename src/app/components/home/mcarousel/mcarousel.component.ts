import { AfterViewInit, Component, OnInit } from '@angular/core';
import Glide from '@glidejs/glide'
@Component({
  selector: 'ns-mcarousel',
  templateUrl: './mcarousel.component.html',
  styleUrls: ['./mcarousel.component.scss']
})
export class McarouselComponent implements AfterViewInit {

  constructor() { }
  ngAfterViewInit(): void {

    const config = {
      type: 'carousel',
      perView: '3',
      gap: '15',
      animationDuration: "1000",
      autoplay: "4000",
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

  // ngOnInit(): void {

  //   const config = {
  //     type: 'carousel',
  //     perView: '3',
  //     gap: '15',
  //     animationDuration: "1000",
  //     autoplay: "4000",
  //     breakpoints: {
  //       576: {
  //         perView: 1
  //       },
  //       992: {
  //         perView: 2
  //       },
  //     }
  //   }

  //   new Glide('.glide', config).mount()

  // }

}
