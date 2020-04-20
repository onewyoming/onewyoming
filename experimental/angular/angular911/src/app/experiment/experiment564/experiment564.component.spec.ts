import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment564Component } from './experiment564.component';

describe('Experiment564Component', () => {
  let component: Experiment564Component;
  let fixture: ComponentFixture<Experiment564Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment564Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment564Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
