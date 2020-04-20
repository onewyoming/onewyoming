import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1240Component } from './experiment1240.component';

describe('Experiment1240Component', () => {
  let component: Experiment1240Component;
  let fixture: ComponentFixture<Experiment1240Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1240Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1240Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
