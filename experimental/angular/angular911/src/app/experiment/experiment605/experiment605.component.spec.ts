import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment605Component } from './experiment605.component';

describe('Experiment605Component', () => {
  let component: Experiment605Component;
  let fixture: ComponentFixture<Experiment605Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment605Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment605Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
