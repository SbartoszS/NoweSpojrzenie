import { Component, OnInit } from '@angular/core';

declare var $: any;
@Component({
  selector: 'ns-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(document).on('click', '[data-toggle="lightbox"]', function (event) {
      $(this).ekkoLightbox({
        loadingMessage: "Loading…",
        showArrows: true,
        leftArrow: "<<<",
        rightArrow: ">>>"
      });
    });
  }
}
