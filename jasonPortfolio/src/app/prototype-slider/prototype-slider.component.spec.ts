import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrototypeSliderComponent } from './prototype-slider.component';

describe('PrototypeSliderComponent', () => {
  let component: PrototypeSliderComponent;
  let fixture: ComponentFixture<PrototypeSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrototypeSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrototypeSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
