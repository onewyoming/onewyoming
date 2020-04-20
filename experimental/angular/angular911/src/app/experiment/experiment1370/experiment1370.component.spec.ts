import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1370Component } from './experiment1370.component';

describe('Experiment1370Component', () => {
  let component: Experiment1370Component;
  let fixture: ComponentFixture<Experiment1370Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1370Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1370Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
