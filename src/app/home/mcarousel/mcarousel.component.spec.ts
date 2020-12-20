import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { McarouselComponent } from './mcarousel.component';

describe('McarouselComponent', () => {
  let component: McarouselComponent;
  let fixture: ComponentFixture<McarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ McarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(McarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
