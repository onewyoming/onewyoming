import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment95Component } from './experiment95.component';

describe('Experiment95Component', () => {
  let component: Experiment95Component;
  let fixture: ComponentFixture<Experiment95Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment95Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment95Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
