import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment537Component } from './experiment537.component';

describe('Experiment537Component', () => {
  let component: Experiment537Component;
  let fixture: ComponentFixture<Experiment537Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment537Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment537Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
