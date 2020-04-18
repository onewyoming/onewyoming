import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1427Component } from './experiment1427.component';

describe('Experiment1427Component', () => {
  let component: Experiment1427Component;
  let fixture: ComponentFixture<Experiment1427Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1427Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1427Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
