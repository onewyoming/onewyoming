import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment97Component } from './experiment97.component';

describe('Experiment97Component', () => {
  let component: Experiment97Component;
  let fixture: ComponentFixture<Experiment97Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment97Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment97Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
