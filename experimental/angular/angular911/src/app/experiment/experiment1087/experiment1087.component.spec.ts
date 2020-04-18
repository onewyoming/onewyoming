import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1087Component } from './experiment1087.component';

describe('Experiment1087Component', () => {
  let component: Experiment1087Component;
  let fixture: ComponentFixture<Experiment1087Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1087Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1087Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
