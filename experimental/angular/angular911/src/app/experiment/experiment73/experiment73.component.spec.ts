import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment73Component } from './experiment73.component';

describe('Experiment73Component', () => {
  let component: Experiment73Component;
  let fixture: ComponentFixture<Experiment73Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment73Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment73Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
