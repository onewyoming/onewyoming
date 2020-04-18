import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment521Component } from './experiment521.component';

describe('Experiment521Component', () => {
  let component: Experiment521Component;
  let fixture: ComponentFixture<Experiment521Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment521Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment521Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
