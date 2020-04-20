import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment881Component } from './experiment881.component';

describe('Experiment881Component', () => {
  let component: Experiment881Component;
  let fixture: ComponentFixture<Experiment881Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment881Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment881Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
