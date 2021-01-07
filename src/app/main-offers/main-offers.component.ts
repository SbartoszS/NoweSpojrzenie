import { ViewportScroller } from '@angular/common';
import {Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { HttpService } from 'src/shared';
import { OfferTitle } from '../models/OfferTitle';
import { SingleOffer } from '../models/SingleOffer';

declare var $: any;

@Component({
  selector: 'ns-main-offers',
  templateUrl: './main-offers.component.html',
  styleUrls: ['./main-offers.component.scss']
})
export class MainOffersComponent implements OnInit {
  offersList: SingleOffer[];
  category;
  titlesList: OfferTitle;
  constructor(private httpService: HttpService, private route: ActivatedRoute, private viewPortScroller:ViewportScroller) { }
 

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: Params) => {
      this.category = params.offer;
      this.offersList = null;
      this.titlesList = null;
      this.httpService.getAllOffersByCategory(this.category).subscribe(data => {
        this.offersList = data;        
      });
      this.httpService.getAllOffersTitleByCategory(this.category).subscribe(data => {
        this.titlesList = data[0];
      });
     })

  }

  switcharrow(name) {
    const nameS = `a${name}`;
    const arr1 = document.querySelector(`.${nameS}`);
    arr1.classList.toggle("move");
  }

  progressChange(e: any): void {
    const input = e.target;
    const key = $(input).data('slide');
    let sliderValue = $(input).val();
    $(`.${key} .slider__drag`).css("left", sliderValue + "%");
    $(`.wrapper_${key} .comparision__img-2`).css("width", sliderValue + "%");
  }

  smoothScroll(id){
    let destinationId = `#acc${id}`
    console.log(destinationId);
    const toTop = 120;
    $('html, body').animate({
      scrollTop: $(destinationId).offset().top-toTop
    }, 1000)
  }
  
}