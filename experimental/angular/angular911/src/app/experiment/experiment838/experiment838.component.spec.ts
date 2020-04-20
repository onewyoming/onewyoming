import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment838Component } from './experiment838.component';

describe('Experiment838Component', () => {
  let component: Experiment838Component;
  let fixture: ComponentFixture<Experiment838Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment838Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment838Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
