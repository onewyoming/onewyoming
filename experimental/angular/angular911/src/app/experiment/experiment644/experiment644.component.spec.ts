import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment644Component } from './experiment644.component';

describe('Experiment644Component', () => {
  let component: Experiment644Component;
  let fixture: ComponentFixture<Experiment644Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment644Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment644Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
