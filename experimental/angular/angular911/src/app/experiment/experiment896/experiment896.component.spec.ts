import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment896Component } from './experiment896.component';

describe('Experiment896Component', () => {
  let component: Experiment896Component;
  let fixture: ComponentFixture<Experiment896Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment896Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment896Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
