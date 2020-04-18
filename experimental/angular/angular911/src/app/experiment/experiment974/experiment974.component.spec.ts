import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment974Component } from './experiment974.component';

describe('Experiment974Component', () => {
  let component: Experiment974Component;
  let fixture: ComponentFixture<Experiment974Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment974Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment974Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
