import { ViewportScroller } from '@angular/common';
import { IfStmt } from '@angular/compiler';
import { AfterContentInit, AfterViewChecked, AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpService } from 'src/shared';
import { OfferTitle } from '../models/OfferTitle';
import { SingleOffer } from '../models/SingleOffer';

declare var $: any;

@Component({
  selector: 'ns-main-offers',
  templateUrl: './main-offers.component.html',
  styleUrls: ['./main-offers.component.scss']
})
export class MainOffersComponent implements OnInit, AfterViewInit {
  offersList: SingleOffer[];
  category;
  titlesList: OfferTitle;
  constructor(private httpService: HttpService, private route: ActivatedRoute, private viewPortScroller:ViewportScroller) { }
  ngAfterViewInit(): void {
    this.initScrollObserver();
  }


  ngOnInit(): void {
    this.route.queryParams.subscribe((params: Params) => {
      this.category = params.offer;
      this.offersList = null;
      this.titlesList = null;
      this.httpService.getAllOffersByCategory(this.category).subscribe(data => {
        this.offersList = data;
      });

      this.httpService.getAllOffersTitleByCategory(this.category).subscribe(data =>{
        this.titlesList = data[0];  
      });
     })

  }

  initScrollObserver(){
    setTimeout(()=>{

      const content = document.querySelector(".scroll-begin");
      const button = document.querySelector(".back");
      let observer = undefined;
      if(button && observer === undefined){
        console.log("start");
        let visible = 0;
        observer = new IntersectionObserver(entries => {    
          (entries[0].intersectionRatio) == 0 ? visible = 1 : visible = 0;
          console.log("intersectionRatio: ",entries[0].intersectionRatio);
          console.log("intersectionRect: ",entries[0].intersectionRect);
          console.log("isIntersecting: ",entries[0].isIntersecting);
          button.setAttribute("style",`opacity: ${visible};`);
        });
        observer.observe(content);
          
      }

    }, 2000);
 
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
    const toTop = 120;
    const element = document.querySelector(destinationId);
    
    $('html, body').animate({
      scrollTop: $(destinationId).offset().top-toTop
    }, 1000)
  }

  scrollToTop(){
    $('html, body').animate({
      scrollTop: 0
    }, 1000)
  }
}
