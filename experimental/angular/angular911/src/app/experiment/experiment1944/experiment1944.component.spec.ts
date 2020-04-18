import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1944Component } from './experiment1944.component';

describe('Experiment1944Component', () => {
  let component: Experiment1944Component;
  let fixture: ComponentFixture<Experiment1944Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1944Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1944Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
