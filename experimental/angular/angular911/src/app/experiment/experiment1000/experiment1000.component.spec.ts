import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1000Component } from './experiment1000.component';

describe('Experiment1000Component', () => {
  let component: Experiment1000Component;
  let fixture: ComponentFixture<Experiment1000Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1000Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1000Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
