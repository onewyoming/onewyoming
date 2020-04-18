import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1892Component } from './experiment1892.component';

describe('Experiment1892Component', () => {
  let component: Experiment1892Component;
  let fixture: ComponentFixture<Experiment1892Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1892Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1892Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
