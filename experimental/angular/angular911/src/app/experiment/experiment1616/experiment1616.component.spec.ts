import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1616Component } from './experiment1616.component';

describe('Experiment1616Component', () => {
  let component: Experiment1616Component;
  let fixture: ComponentFixture<Experiment1616Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1616Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1616Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
