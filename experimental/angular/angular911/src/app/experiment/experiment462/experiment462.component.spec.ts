import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment462Component } from './experiment462.component';

describe('Experiment462Component', () => {
  let component: Experiment462Component;
  let fixture: ComponentFixture<Experiment462Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment462Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment462Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
