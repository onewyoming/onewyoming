import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment192Component } from './experiment192.component';

describe('Experiment192Component', () => {
  let component: Experiment192Component;
  let fixture: ComponentFixture<Experiment192Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment192Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment192Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
