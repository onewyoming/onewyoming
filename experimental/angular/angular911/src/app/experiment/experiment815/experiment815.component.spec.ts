import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment815Component } from './experiment815.component';

describe('Experiment815Component', () => {
  let component: Experiment815Component;
  let fixture: ComponentFixture<Experiment815Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment815Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment815Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
