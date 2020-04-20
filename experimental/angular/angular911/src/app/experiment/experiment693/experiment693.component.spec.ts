import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment693Component } from './experiment693.component';

describe('Experiment693Component', () => {
  let component: Experiment693Component;
  let fixture: ComponentFixture<Experiment693Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment693Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment693Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
