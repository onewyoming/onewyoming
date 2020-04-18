import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment696Component } from './experiment696.component';

describe('Experiment696Component', () => {
  let component: Experiment696Component;
  let fixture: ComponentFixture<Experiment696Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment696Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment696Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
