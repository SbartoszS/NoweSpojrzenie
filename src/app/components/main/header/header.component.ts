import { Component, HostListener, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

declare var $: any;

@Component({
  selector: 'ns-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  windowChangeSize: number = 992
  openNav(event: any) {
    if (window.innerWidth > this.windowChangeSize) {
      return;
    }
    if ($(event.target).hasClass("dropdown-item") || $(event.target).hasClass("nav-link") || $(event.target).hasClass("navbar-toggler")) {
      $('.open-button').toggle();
      $("body").toggleClass("fixed");
      $('.mobile-menu').toggleClass('open');
      $('.overlay').toggleClass('blurred');
    }
  }

  @HostListener('window:scroll', ['$event'])
  onScrollNav($event) {
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

