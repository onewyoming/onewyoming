import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1096Component } from './experiment1096.component';

describe('Experiment1096Component', () => {
  let component: Experiment1096Component;
  let fixture: ComponentFixture<Experiment1096Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1096Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1096Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
