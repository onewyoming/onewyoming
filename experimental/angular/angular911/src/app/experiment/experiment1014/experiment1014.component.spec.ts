import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1014Component } from './experiment1014.component';

describe('Experiment1014Component', () => {
  let component: Experiment1014Component;
  let fixture: ComponentFixture<Experiment1014Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1014Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1014Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
