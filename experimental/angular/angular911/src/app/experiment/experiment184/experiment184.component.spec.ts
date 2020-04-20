import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment184Component } from './experiment184.component';

describe('Experiment184Component', () => {
  let component: Experiment184Component;
  let fixture: ComponentFixture<Experiment184Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment184Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment184Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
