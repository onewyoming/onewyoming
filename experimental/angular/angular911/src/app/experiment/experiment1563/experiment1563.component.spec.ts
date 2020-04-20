import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1563Component } from './experiment1563.component';

describe('Experiment1563Component', () => {
  let component: Experiment1563Component;
  let fixture: ComponentFixture<Experiment1563Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1563Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1563Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
