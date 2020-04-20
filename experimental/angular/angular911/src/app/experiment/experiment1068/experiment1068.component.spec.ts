import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1068Component } from './experiment1068.component';

describe('Experiment1068Component', () => {
  let component: Experiment1068Component;
  let fixture: ComponentFixture<Experiment1068Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1068Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1068Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
