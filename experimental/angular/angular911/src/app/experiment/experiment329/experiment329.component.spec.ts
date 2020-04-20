import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment329Component } from './experiment329.component';

describe('Experiment329Component', () => {
  let component: Experiment329Component;
  let fixture: ComponentFixture<Experiment329Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment329Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment329Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
