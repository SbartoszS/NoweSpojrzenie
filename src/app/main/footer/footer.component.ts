import { Component, HostListener, OnInit } from '@angular/core';

declare var $: any;
@Component({
  selector: 'ns-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  scrollToTop(){
    $('html, body').animate({
      scrollTop: 0
    }, 1000)
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    if   (window.pageYOffset >= 300) $('.return-top').fadeIn(200);
    else $('.return-top').fadeOut(200);
  }

}
