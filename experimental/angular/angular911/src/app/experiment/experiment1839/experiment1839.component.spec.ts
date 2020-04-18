import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1839Component } from './experiment1839.component';

describe('Experiment1839Component', () => {
  let component: Experiment1839Component;
  let fixture: ComponentFixture<Experiment1839Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1839Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1839Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
