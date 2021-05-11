import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ns-title-page',
  templateUrl: './title-page.component.html',
  styleUrls: ['./title-page.component.scss']
})
export class TitlePageComponent {

  @Input() title: string;

}
