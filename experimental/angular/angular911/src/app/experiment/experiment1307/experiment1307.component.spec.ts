import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1307Component } from './experiment1307.component';

describe('Experiment1307Component', () => {
  let component: Experiment1307Component;
  let fixture: ComponentFixture<Experiment1307Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1307Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1307Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
