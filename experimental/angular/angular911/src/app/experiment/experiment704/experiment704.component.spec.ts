import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment704Component } from './experiment704.component';

describe('Experiment704Component', () => {
  let component: Experiment704Component;
  let fixture: ComponentFixture<Experiment704Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment704Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment704Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
