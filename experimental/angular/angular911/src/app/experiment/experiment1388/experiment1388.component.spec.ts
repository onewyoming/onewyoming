import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1388Component } from './experiment1388.component';

describe('Experiment1388Component', () => {
  let component: Experiment1388Component;
  let fixture: ComponentFixture<Experiment1388Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1388Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1388Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
