import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment215Component } from './experiment215.component';

describe('Experiment215Component', () => {
  let component: Experiment215Component;
  let fixture: ComponentFixture<Experiment215Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment215Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment215Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
