import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment302Component } from './experiment302.component';

describe('Experiment302Component', () => {
  let component: Experiment302Component;
  let fixture: ComponentFixture<Experiment302Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment302Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment302Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
