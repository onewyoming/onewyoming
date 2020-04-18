import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1448Component } from './experiment1448.component';

describe('Experiment1448Component', () => {
  let component: Experiment1448Component;
  let fixture: ComponentFixture<Experiment1448Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1448Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1448Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
