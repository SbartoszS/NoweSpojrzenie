import { Component, OnInit } from '@angular/core';
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
export class MainOffersComponent implements OnInit {
  offersList: SingleOffer[];
  category;
  titlesList: OfferTitle;
  constructor(private httpService: HttpService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: Params) => {
      this.category = params.offer;
      this.httpService.getAllOffersByCategory(this.category).subscribe(data =>{
        this.offersList = data;
      });
      this.httpService.getAllOffersTitleByCategory(this.category).subscribe(data =>{
        this.titlesList = data[0];  
      });
     })
  }

  progressChange(e: any): void {
    const input = e.target;
    const key = $(input).data('slide');
    let sliderValue = $(input).val();
    $(`.${key} .slider__drag`).css("left", sliderValue + "%");
    $(`.wrapper_${key} .comparision__img-2`).css("width", sliderValue + "%");
  }
}
