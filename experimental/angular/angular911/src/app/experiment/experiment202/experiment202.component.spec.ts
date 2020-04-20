import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment202Component } from './experiment202.component';

describe('Experiment202Component', () => {
  let component: Experiment202Component;
  let fixture: ComponentFixture<Experiment202Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment202Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment202Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
