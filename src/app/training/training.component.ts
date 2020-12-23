import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'ns-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.scss']
})
export class TrainingComponent implements OnInit {

  constructor() { }

  switcharrow(e) {
    e.target.classList.toggle("move");
  }

  ngOnInit(): void {

  }

}
