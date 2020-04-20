import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1648Component } from './experiment1648.component';

describe('Experiment1648Component', () => {
  let component: Experiment1648Component;
  let fixture: ComponentFixture<Experiment1648Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1648Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1648Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
