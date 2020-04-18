import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1547Component } from './experiment1547.component';

describe('Experiment1547Component', () => {
  let component: Experiment1547Component;
  let fixture: ComponentFixture<Experiment1547Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1547Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1547Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
