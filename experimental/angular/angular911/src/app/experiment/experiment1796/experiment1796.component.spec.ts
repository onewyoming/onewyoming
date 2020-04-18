import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1796Component } from './experiment1796.component';

describe('Experiment1796Component', () => {
  let component: Experiment1796Component;
  let fixture: ComponentFixture<Experiment1796Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1796Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1796Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
