import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/shared/service/httpService.service';
import { category } from "../../../shared/models/categoryEnum";
import {PriceList} from "../../../shared/models/PriceList"
@Component({
  selector: 'ns-pricelist',
  templateUrl: './pricelist.component.html',
  styleUrls: ['./pricelist.component.scss']
})
export class PricelistComponent implements OnInit {
  lashes$: PriceList[];
  eyebrows$: PriceList[];
  assumption: string = " zł (nowe założenie) / ";
  supplement: string = " zł (uzupełnienie)"
  constructor(private httpService: HttpService) { }


  ngOnInit(): void {
     this.httpService.getByCategoryPrice(category.rzesy).subscribe(data => {
      this.lashes$ = data;      
    });
    this.httpService.getByCategoryPrice(category.brwi).subscribe(data => {
     this.eyebrows$ = data; 
   });

  }

  ngAfterViewInit(): void {
  
    
  }

}
