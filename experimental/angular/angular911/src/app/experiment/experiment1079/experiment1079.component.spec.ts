import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1079Component } from './experiment1079.component';

describe('Experiment1079Component', () => {
  let component: Experiment1079Component;
  let fixture: ComponentFixture<Experiment1079Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1079Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1079Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
