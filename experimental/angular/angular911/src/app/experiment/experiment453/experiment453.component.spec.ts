import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment453Component } from './experiment453.component';

describe('Experiment453Component', () => {
  let component: Experiment453Component;
  let fixture: ComponentFixture<Experiment453Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment453Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment453Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
