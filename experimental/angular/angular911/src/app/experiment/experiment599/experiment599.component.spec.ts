import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment599Component } from './experiment599.component';

describe('Experiment599Component', () => {
  let component: Experiment599Component;
  let fixture: ComponentFixture<Experiment599Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment599Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment599Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
