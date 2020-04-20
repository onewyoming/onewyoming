import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1742Component } from './experiment1742.component';

describe('Experiment1742Component', () => {
  let component: Experiment1742Component;
  let fixture: ComponentFixture<Experiment1742Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1742Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1742Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
