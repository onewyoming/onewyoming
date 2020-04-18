import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment419Component } from './experiment419.component';

describe('Experiment419Component', () => {
  let component: Experiment419Component;
  let fixture: ComponentFixture<Experiment419Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment419Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment419Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
