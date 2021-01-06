import { Component, OnInit, HostListener } from '@angular/core';

declare var $: any;

@Component({
  selector: 'ns-opinion',
  templateUrl: './opinion.component.html',
  styleUrls: ['./opinion.component.scss']
})
export class OpinionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

  @HostListener('window:scroll', ['$event'])
  onScroll($event): void {
    let pos = $(window).scrollTop();
    let pos1 = $('.opinion').offset().top + $('.opinion').outerHeight() - window.innerHeight;
    if (pos >= pos1) {
      $('.opinion').addClass('opinion-animate');
    }
  }
}
