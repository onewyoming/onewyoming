import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1812Component } from './experiment1812.component';

describe('Experiment1812Component', () => {
  let component: Experiment1812Component;
  let fixture: ComponentFixture<Experiment1812Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1812Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1812Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
