import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1825Component } from './experiment1825.component';

describe('Experiment1825Component', () => {
  let component: Experiment1825Component;
  let fixture: ComponentFixture<Experiment1825Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1825Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1825Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
