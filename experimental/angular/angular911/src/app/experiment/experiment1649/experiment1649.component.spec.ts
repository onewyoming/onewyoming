import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1649Component } from './experiment1649.component';

describe('Experiment1649Component', () => {
  let component: Experiment1649Component;
  let fixture: ComponentFixture<Experiment1649Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1649Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1649Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
