import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'ns-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.scss']
})
export class TrainingComponent implements OnInit {

  constructor() { }

  switcharrow(name) {
 
      const arr1 = document.querySelector(`.${name}`);
      arr1.classList.toggle("move");

    }

  ngOnInit(): void {

  }

}
