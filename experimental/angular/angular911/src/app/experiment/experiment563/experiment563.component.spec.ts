import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment563Component } from './experiment563.component';

describe('Experiment563Component', () => {
  let component: Experiment563Component;
  let fixture: ComponentFixture<Experiment563Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment563Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment563Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
