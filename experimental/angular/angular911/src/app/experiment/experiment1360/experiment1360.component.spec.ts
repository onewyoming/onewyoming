import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1360Component } from './experiment1360.component';

describe('Experiment1360Component', () => {
  let component: Experiment1360Component;
  let fixture: ComponentFixture<Experiment1360Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1360Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1360Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
