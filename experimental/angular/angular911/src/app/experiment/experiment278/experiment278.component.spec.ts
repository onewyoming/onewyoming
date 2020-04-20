import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment278Component } from './experiment278.component';

describe('Experiment278Component', () => {
  let component: Experiment278Component;
  let fixture: ComponentFixture<Experiment278Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment278Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment278Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
