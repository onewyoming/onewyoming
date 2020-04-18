import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1189Component } from './experiment1189.component';

describe('Experiment1189Component', () => {
  let component: Experiment1189Component;
  let fixture: ComponentFixture<Experiment1189Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1189Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1189Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
