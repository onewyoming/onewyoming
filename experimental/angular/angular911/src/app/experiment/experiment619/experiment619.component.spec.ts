import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment619Component } from './experiment619.component';

describe('Experiment619Component', () => {
  let component: Experiment619Component;
  let fixture: ComponentFixture<Experiment619Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment619Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment619Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
