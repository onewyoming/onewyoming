import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment139Component } from './experiment139.component';

describe('Experiment139Component', () => {
  let component: Experiment139Component;
  let fixture: ComponentFixture<Experiment139Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment139Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment139Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
