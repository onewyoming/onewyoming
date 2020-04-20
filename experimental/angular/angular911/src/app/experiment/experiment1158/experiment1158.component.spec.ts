import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1158Component } from './experiment1158.component';

describe('Experiment1158Component', () => {
  let component: Experiment1158Component;
  let fixture: ComponentFixture<Experiment1158Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1158Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1158Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
