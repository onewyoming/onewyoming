import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment746Component } from './experiment746.component';

describe('Experiment746Component', () => {
  let component: Experiment746Component;
  let fixture: ComponentFixture<Experiment746Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment746Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment746Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
