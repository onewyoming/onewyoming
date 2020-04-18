import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1306Component } from './experiment1306.component';

describe('Experiment1306Component', () => {
  let component: Experiment1306Component;
  let fixture: ComponentFixture<Experiment1306Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1306Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1306Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
