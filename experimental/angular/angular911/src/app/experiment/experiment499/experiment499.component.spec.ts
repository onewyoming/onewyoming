import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment499Component } from './experiment499.component';

describe('Experiment499Component', () => {
  let component: Experiment499Component;
  let fixture: ComponentFixture<Experiment499Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment499Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment499Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
