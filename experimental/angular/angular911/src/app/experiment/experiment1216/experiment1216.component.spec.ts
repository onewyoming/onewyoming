import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1216Component } from './experiment1216.component';

describe('Experiment1216Component', () => {
  let component: Experiment1216Component;
  let fixture: ComponentFixture<Experiment1216Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1216Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1216Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
