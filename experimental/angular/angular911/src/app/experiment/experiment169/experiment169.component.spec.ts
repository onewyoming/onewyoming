import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment169Component } from './experiment169.component';

describe('Experiment169Component', () => {
  let component: Experiment169Component;
  let fixture: ComponentFixture<Experiment169Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment169Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment169Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
