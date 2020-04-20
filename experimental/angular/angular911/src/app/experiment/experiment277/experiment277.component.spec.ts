import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment277Component } from './experiment277.component';

describe('Experiment277Component', () => {
  let component: Experiment277Component;
  let fixture: ComponentFixture<Experiment277Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment277Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment277Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
