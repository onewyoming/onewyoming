import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1826Component } from './experiment1826.component';

describe('Experiment1826Component', () => {
  let component: Experiment1826Component;
  let fixture: ComponentFixture<Experiment1826Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1826Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1826Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
