import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment94Component } from './experiment94.component';

describe('Experiment94Component', () => {
  let component: Experiment94Component;
  let fixture: ComponentFixture<Experiment94Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment94Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment94Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
