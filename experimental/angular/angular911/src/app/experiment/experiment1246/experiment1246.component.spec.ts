import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1246Component } from './experiment1246.component';

describe('Experiment1246Component', () => {
  let component: Experiment1246Component;
  let fixture: ComponentFixture<Experiment1246Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1246Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1246Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
