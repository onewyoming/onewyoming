import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1488Component } from './experiment1488.component';

describe('Experiment1488Component', () => {
  let component: Experiment1488Component;
  let fixture: ComponentFixture<Experiment1488Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1488Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1488Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
