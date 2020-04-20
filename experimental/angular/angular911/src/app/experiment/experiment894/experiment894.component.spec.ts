import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment894Component } from './experiment894.component';

describe('Experiment894Component', () => {
  let component: Experiment894Component;
  let fixture: ComponentFixture<Experiment894Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment894Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment894Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
