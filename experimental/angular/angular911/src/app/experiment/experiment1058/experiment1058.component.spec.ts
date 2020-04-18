import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1058Component } from './experiment1058.component';

describe('Experiment1058Component', () => {
  let component: Experiment1058Component;
  let fixture: ComponentFixture<Experiment1058Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1058Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1058Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
