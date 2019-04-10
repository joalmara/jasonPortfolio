import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsecasepptComponent } from './usecaseppt.component';

describe('UsecasepptComponent', () => {
  let component: UsecasepptComponent;
  let fixture: ComponentFixture<UsecasepptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsecasepptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsecasepptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
