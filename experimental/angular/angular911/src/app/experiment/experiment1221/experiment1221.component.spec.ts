import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1221Component } from './experiment1221.component';

describe('Experiment1221Component', () => {
  let component: Experiment1221Component;
  let fixture: ComponentFixture<Experiment1221Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1221Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1221Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
