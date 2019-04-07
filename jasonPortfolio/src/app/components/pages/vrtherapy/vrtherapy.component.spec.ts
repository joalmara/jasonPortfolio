import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VRTherapyComponent } from './vrtherapy.component';

describe('VRTherapyComponent', () => {
  let component: VRTherapyComponent;
  let fixture: ComponentFixture<VRTherapyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VRTherapyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VRTherapyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
