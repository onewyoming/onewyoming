import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1349Component } from './experiment1349.component';

describe('Experiment1349Component', () => {
  let component: Experiment1349Component;
  let fixture: ComponentFixture<Experiment1349Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1349Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1349Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
