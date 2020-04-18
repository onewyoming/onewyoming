import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1475Component } from './experiment1475.component';

describe('Experiment1475Component', () => {
  let component: Experiment1475Component;
  let fixture: ComponentFixture<Experiment1475Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1475Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1475Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
