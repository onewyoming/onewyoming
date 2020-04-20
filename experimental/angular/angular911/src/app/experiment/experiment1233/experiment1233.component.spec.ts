import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1233Component } from './experiment1233.component';

describe('Experiment1233Component', () => {
  let component: Experiment1233Component;
  let fixture: ComponentFixture<Experiment1233Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1233Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1233Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
