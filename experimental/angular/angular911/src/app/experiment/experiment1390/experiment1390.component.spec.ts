import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1390Component } from './experiment1390.component';

describe('Experiment1390Component', () => {
  let component: Experiment1390Component;
  let fixture: ComponentFixture<Experiment1390Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1390Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1390Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
