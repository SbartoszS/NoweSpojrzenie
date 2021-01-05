import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService, PriceList } from 'src/shared/httpService.service';

@Component({
  selector: 'ns-pricelist',
  templateUrl: './pricelist.component.html',
  styleUrls: ['./pricelist.component.scss']
})
export class PricelistComponent implements OnInit {
  lashes$: Observable<PriceList[]>;
  eyebrows$: Observable<PriceList[]>;
  assumption: string = " zł (nowe założenie) / ";
  supplement: string = " zł (uzupełnienie)"
  constructor(private httpService: HttpService) { }


  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    this.lashes$ = this.httpService.getByCategoryPrice("rzesy");
    this.eyebrows$ = this.httpService.getByCategoryPrice("brwi");
  }

}
