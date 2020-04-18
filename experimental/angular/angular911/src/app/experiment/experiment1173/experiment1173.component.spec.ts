import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1173Component } from './experiment1173.component';

describe('Experiment1173Component', () => {
  let component: Experiment1173Component;
  let fixture: ComponentFixture<Experiment1173Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1173Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1173Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
