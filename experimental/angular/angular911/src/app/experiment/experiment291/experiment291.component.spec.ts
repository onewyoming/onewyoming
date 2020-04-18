import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment291Component } from './experiment291.component';

describe('Experiment291Component', () => {
  let component: Experiment291Component;
  let fixture: ComponentFixture<Experiment291Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment291Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment291Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
