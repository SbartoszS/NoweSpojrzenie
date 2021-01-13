import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/shared/httpService.service';
import { category } from "../models/categoryEnum";
import {PriceList} from "../models/PriceList"
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
     console.log(this.eyebrows$);
         
   });

  }

  ngAfterViewInit(): void {
  
    
  }

}
