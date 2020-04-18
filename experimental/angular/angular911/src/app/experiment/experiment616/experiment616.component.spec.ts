import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment616Component } from './experiment616.component';

describe('Experiment616Component', () => {
  let component: Experiment616Component;
  let fixture: ComponentFixture<Experiment616Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment616Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment616Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
