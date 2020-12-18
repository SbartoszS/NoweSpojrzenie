import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'ns-opinion',
  templateUrl: './opinion.component.html',
  styleUrls: ['./opinion.component.scss']
})
export class OpinionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(window).on('scroll', () => {
      const pos = $(window).scrollTop();
      const pos1 = $('.opinion').offset().top + $('.opinion').outerHeight() - window.innerHeight;
      if (pos >= pos1) {
        $('.opinion').addClass('opinion-animate');
      }
    });
  }
}
