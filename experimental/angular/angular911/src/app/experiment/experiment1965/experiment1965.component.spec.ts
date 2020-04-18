import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1965Component } from './experiment1965.component';

describe('Experiment1965Component', () => {
  let component: Experiment1965Component;
  let fixture: ComponentFixture<Experiment1965Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1965Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1965Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
