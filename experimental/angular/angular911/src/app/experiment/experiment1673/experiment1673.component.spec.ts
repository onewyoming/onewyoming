import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1673Component } from './experiment1673.component';

describe('Experiment1673Component', () => {
  let component: Experiment1673Component;
  let fixture: ComponentFixture<Experiment1673Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1673Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1673Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
