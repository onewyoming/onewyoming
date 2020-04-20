import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment526Component } from './experiment526.component';

describe('Experiment526Component', () => {
  let component: Experiment526Component;
  let fixture: ComponentFixture<Experiment526Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment526Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment526Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
