import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1526Component } from './experiment1526.component';

describe('Experiment1526Component', () => {
  let component: Experiment1526Component;
  let fixture: ComponentFixture<Experiment1526Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1526Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1526Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
