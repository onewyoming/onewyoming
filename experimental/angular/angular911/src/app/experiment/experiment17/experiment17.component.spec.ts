import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment17Component } from './experiment17.component';

describe('Experiment17Component', () => {
  let component: Experiment17Component;
  let fixture: ComponentFixture<Experiment17Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment17Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
