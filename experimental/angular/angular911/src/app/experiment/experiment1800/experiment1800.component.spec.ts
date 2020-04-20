import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1800Component } from './experiment1800.component';

describe('Experiment1800Component', () => {
  let component: Experiment1800Component;
  let fixture: ComponentFixture<Experiment1800Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1800Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1800Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
