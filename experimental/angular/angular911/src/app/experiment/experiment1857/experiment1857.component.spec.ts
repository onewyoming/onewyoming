import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1857Component } from './experiment1857.component';

describe('Experiment1857Component', () => {
  let component: Experiment1857Component;
  let fixture: ComponentFixture<Experiment1857Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1857Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1857Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
