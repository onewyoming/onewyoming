import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1403Component } from './experiment1403.component';

describe('Experiment1403Component', () => {
  let component: Experiment1403Component;
  let fixture: ComponentFixture<Experiment1403Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1403Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1403Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
