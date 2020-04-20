import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1435Component } from './experiment1435.component';

describe('Experiment1435Component', () => {
  let component: Experiment1435Component;
  let fixture: ComponentFixture<Experiment1435Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1435Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1435Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
