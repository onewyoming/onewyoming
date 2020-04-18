import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1511Component } from './experiment1511.component';

describe('Experiment1511Component', () => {
  let component: Experiment1511Component;
  let fixture: ComponentFixture<Experiment1511Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1511Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1511Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
