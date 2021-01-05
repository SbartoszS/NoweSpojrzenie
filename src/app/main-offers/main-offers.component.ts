import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from 'src/shared';
import { SingleOffer } from '../models/SingleOffer';

declare var $: any;

@Component({
  selector: 'ns-main-offers',
  templateUrl: './main-offers.component.html',
  styleUrls: ['./main-offers.component.scss']
})
export class MainOffersComponent implements OnInit {
  offersList: Observable<SingleOffer[]>;
  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.offersList = this.httpService.getAllOffers();
  }

  progressChange(e: any): void {
    const input = e.target;
    const key = $(input).data('slide');
    let sliderValue = $(input).val();
    $(`.${key} .slider__drag`).css("left", sliderValue + "%");
    $(`.wrapper_${key} .comparision__img-2`).css("width", sliderValue + "%");
  }
}
