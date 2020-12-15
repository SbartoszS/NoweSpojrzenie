import { Component, HostListener, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

declare var $: any;

@Component({
  selector: 'ns-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(@Inject(DOCUMENT) private document: Document) { }

  windowChangeSize: number = 992
  openNav(event: any) {
    if (window.innerWidth > this.windowChangeSize) { }
    else {
      $('.open-button').toggle();
      $("body").toggleClass("fixed");
      $('.mobile-menu').toggleClass('open');
      $('.overlay').toggleClass('blurred');
    }
  }

  @HostListener('window:scroll', ['$event'])
  onScrollNav($event) {
    console.log("test");
    let headerHeight = $('header').innerHeight();
    let nav = $('.navbar').innerHeight();

    if ($(window).scrollTop() > headerHeight + (nav - headerHeight)) {
      $('.navbar').addClass('bottom-shadow');
      $('.logo-nav').css({ "width": "60px", 'transition': '0.2s ease' });
      if (window.innerWidth > 992) { $('.logo-name').hide(); }
    }
    else {
      $('.navbar').removeClass('bottom-shadow');
      $('.logo-nav').css('width', '100px');
      if (window.innerWidth > 992) { $('.logo-name').show(); }
    }

  }
}

