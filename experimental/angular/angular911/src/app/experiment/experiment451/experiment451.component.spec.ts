import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment451Component } from './experiment451.component';

describe('Experiment451Component', () => {
  let component: Experiment451Component;
  let fixture: ComponentFixture<Experiment451Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment451Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment451Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
