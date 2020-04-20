import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1326Component } from './experiment1326.component';

describe('Experiment1326Component', () => {
  let component: Experiment1326Component;
  let fixture: ComponentFixture<Experiment1326Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1326Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1326Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
