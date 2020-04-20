import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1090Component } from './experiment1090.component';

describe('Experiment1090Component', () => {
  let component: Experiment1090Component;
  let fixture: ComponentFixture<Experiment1090Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1090Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1090Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
