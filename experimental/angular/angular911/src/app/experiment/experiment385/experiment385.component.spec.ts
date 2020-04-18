import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment385Component } from './experiment385.component';

describe('Experiment385Component', () => {
  let component: Experiment385Component;
  let fixture: ComponentFixture<Experiment385Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment385Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment385Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
