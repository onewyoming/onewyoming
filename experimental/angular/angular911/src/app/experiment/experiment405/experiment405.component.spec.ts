import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment405Component } from './experiment405.component';

describe('Experiment405Component', () => {
  let component: Experiment405Component;
  let fixture: ComponentFixture<Experiment405Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment405Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment405Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
