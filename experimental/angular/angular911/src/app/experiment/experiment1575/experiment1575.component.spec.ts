import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1575Component } from './experiment1575.component';

describe('Experiment1575Component', () => {
  let component: Experiment1575Component;
  let fixture: ComponentFixture<Experiment1575Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1575Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1575Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
