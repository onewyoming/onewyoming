import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1310Component } from './experiment1310.component';

describe('Experiment1310Component', () => {
  let component: Experiment1310Component;
  let fixture: ComponentFixture<Experiment1310Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1310Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1310Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
