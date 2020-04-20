import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment561Component } from './experiment561.component';

describe('Experiment561Component', () => {
  let component: Experiment561Component;
  let fixture: ComponentFixture<Experiment561Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment561Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment561Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
