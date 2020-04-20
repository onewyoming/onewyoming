import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment323Component } from './experiment323.component';

describe('Experiment323Component', () => {
  let component: Experiment323Component;
  let fixture: ComponentFixture<Experiment323Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment323Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment323Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
