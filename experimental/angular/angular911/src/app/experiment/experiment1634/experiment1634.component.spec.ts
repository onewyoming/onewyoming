import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1634Component } from './experiment1634.component';

describe('Experiment1634Component', () => {
  let component: Experiment1634Component;
  let fixture: ComponentFixture<Experiment1634Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1634Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1634Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
