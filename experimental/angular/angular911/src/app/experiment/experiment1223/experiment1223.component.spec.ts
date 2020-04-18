import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1223Component } from './experiment1223.component';

describe('Experiment1223Component', () => {
  let component: Experiment1223Component;
  let fixture: ComponentFixture<Experiment1223Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1223Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1223Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
