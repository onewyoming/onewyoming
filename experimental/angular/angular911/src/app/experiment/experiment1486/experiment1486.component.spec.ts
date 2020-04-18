import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1486Component } from './experiment1486.component';

describe('Experiment1486Component', () => {
  let component: Experiment1486Component;
  let fixture: ComponentFixture<Experiment1486Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1486Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1486Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
