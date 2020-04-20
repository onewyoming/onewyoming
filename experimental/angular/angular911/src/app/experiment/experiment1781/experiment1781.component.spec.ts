import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1781Component } from './experiment1781.component';

describe('Experiment1781Component', () => {
  let component: Experiment1781Component;
  let fixture: ComponentFixture<Experiment1781Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1781Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1781Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
