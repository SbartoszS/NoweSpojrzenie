import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from 'src/shared';
import { SingleOffer } from '../models/SingleOffer';

@Component({
  selector: 'ns-main-offers',
  templateUrl: './main-offers.component.html',
  styleUrls: ['./main-offers.component.scss']
})
export class MainOffersComponent implements OnInit {
offersList : Observable<SingleOffer[]>;
  constructor(private httpService : HttpService) { }

  ngOnInit(): void {
    this.offersList = this.httpService.getAllOffers();
  }

}
