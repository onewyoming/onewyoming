import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1667Component } from './experiment1667.component';

describe('Experiment1667Component', () => {
  let component: Experiment1667Component;
  let fixture: ComponentFixture<Experiment1667Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1667Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1667Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
