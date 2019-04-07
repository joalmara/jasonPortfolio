import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchCanvasComponent } from './research-canvas.component';

describe('ResearchCanvasComponent', () => {
  let component: ResearchCanvasComponent;
  let fixture: ComponentFixture<ResearchCanvasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResearchCanvasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResearchCanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
