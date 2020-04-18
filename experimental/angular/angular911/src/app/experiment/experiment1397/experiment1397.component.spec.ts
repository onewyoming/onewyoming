import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1397Component } from './experiment1397.component';

describe('Experiment1397Component', () => {
  let component: Experiment1397Component;
  let fixture: ComponentFixture<Experiment1397Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1397Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1397Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
