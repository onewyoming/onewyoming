import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1244Component } from './experiment1244.component';

describe('Experiment1244Component', () => {
  let component: Experiment1244Component;
  let fixture: ComponentFixture<Experiment1244Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1244Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1244Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
