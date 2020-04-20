import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1646Component } from './experiment1646.component';

describe('Experiment1646Component', () => {
  let component: Experiment1646Component;
  let fixture: ComponentFixture<Experiment1646Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1646Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1646Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
