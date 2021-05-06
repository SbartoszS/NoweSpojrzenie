import { Input } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'ns-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent {
  @Input() title: string;
}
