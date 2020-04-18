import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment2000Component } from './experiment2000.component';

describe('Experiment2000Component', () => {
  let component: Experiment2000Component;
  let fixture: ComponentFixture<Experiment2000Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment2000Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment2000Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
