import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment636Component } from './experiment636.component';

describe('Experiment636Component', () => {
  let component: Experiment636Component;
  let fixture: ComponentFixture<Experiment636Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment636Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment636Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
