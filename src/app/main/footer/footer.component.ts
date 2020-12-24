import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ns-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  callMe() {
    document.location.href = 'tel:797723557'
  }

  mailMe(){
    document.location.href = 'mailto:paulinarusak99@gmail.com'
  }

  ngOnInit(): void {
  }

}
