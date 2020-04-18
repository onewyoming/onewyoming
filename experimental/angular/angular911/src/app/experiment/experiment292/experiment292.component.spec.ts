import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment292Component } from './experiment292.component';

describe('Experiment292Component', () => {
  let component: Experiment292Component;
  let fixture: ComponentFixture<Experiment292Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment292Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment292Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
