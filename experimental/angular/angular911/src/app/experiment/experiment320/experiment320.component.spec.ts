import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment320Component } from './experiment320.component';

describe('Experiment320Component', () => {
  let component: Experiment320Component;
  let fixture: ComponentFixture<Experiment320Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment320Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment320Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
