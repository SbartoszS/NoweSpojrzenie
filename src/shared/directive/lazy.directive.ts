import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[nsLazy]'
})
export class LazyDirective {

  constructor({ nativeElement }: ElementRef<HTMLImageElement>) {
    const supports = 'loading' in HTMLImageElement.prototype;

    if (supports) {
      nativeElement.setAttribute('loading', 'lazy');
    }
  }

}
