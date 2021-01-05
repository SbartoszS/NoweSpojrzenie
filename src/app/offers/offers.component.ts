import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'ns-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(".slider__input").on('input change', function (event) {
      let sliderValue = $(this).val();
      console.log(sliderValue);
      $(".slider__drag").css("left", sliderValue + "%");
      $(".comparision__img-2").css("width", sliderValue + "%");
    })

  }
}
