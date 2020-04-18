import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment883Component } from './experiment883.component';

describe('Experiment883Component', () => {
  let component: Experiment883Component;
  let fixture: ComponentFixture<Experiment883Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment883Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment883Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
