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

    $(".slider__input").on('input change', function (event: any) {
      let sliderValue = $(this).val();
      console.log(sliderValue);
      $(".slider__drag").css("left", sliderValue + "%");
      $(".comparision__img-2").css("width", sliderValue + "%");
    })
  }

  dafaq(): void {
    $(".single-offer").on('click', function () {
      console.log("hmmm");
    })
  }

}
