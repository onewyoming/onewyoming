import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment261Component } from './experiment261.component';

describe('Experiment261Component', () => {
  let component: Experiment261Component;
  let fixture: ComponentFixture<Experiment261Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment261Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment261Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
