import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment284Component } from './experiment284.component';

describe('Experiment284Component', () => {
  let component: Experiment284Component;
  let fixture: ComponentFixture<Experiment284Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment284Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment284Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
