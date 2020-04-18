import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment71Component } from './experiment71.component';

describe('Experiment71Component', () => {
  let component: Experiment71Component;
  let fixture: ComponentFixture<Experiment71Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment71Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment71Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
