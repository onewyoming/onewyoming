import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment603Component } from './experiment603.component';

describe('Experiment603Component', () => {
  let component: Experiment603Component;
  let fixture: ComponentFixture<Experiment603Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment603Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment603Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
