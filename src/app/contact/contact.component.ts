import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ns-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const url = 'https://www.google.com/maps/dir//Nowe+spojrzenie+stylizacja+rz%C4%99s,+Aleja+3+Maja+4,+27-400+Ostrowiec+%C5%9Awi%C4%99tokrzyski/@50.936755,21.388302,18z/data=!4m16!1m6!3m5!1s0x0:0x386b351b2fdaa8b6!2sNowe+spojrzenie+stylizacja+rz%C4%99s!8m2!3d50.9372271!4d21.3872702!4m8!1m0!1m5!1m1!1s0x4718092afc054f7b:0x386b351b2fdaa8b6!2m2!1d21.3872702!2d50.9372271!3e3?hl=pl'

    document.querySelector('.place-button').addEventListener('click', () => {
      window.open(url)
    })

  }

}
