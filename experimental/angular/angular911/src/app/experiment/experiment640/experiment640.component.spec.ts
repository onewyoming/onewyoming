import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment640Component } from './experiment640.component';

describe('Experiment640Component', () => {
  let component: Experiment640Component;
  let fixture: ComponentFixture<Experiment640Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment640Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment640Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
