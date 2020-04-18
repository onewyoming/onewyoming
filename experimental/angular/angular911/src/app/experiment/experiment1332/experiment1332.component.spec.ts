import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1332Component } from './experiment1332.component';

describe('Experiment1332Component', () => {
  let component: Experiment1332Component;
  let fixture: ComponentFixture<Experiment1332Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1332Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1332Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
