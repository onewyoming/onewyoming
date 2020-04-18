import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment807Component } from './experiment807.component';

describe('Experiment807Component', () => {
  let component: Experiment807Component;
  let fixture: ComponentFixture<Experiment807Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment807Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment807Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
