import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment296Component } from './experiment296.component';

describe('Experiment296Component', () => {
  let component: Experiment296Component;
  let fixture: ComponentFixture<Experiment296Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment296Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment296Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
