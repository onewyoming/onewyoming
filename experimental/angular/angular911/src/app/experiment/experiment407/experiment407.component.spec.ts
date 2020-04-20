import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment407Component } from './experiment407.component';

describe('Experiment407Component', () => {
  let component: Experiment407Component;
  let fixture: ComponentFixture<Experiment407Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment407Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment407Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
