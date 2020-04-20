import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment736Component } from './experiment736.component';

describe('Experiment736Component', () => {
  let component: Experiment736Component;
  let fixture: ComponentFixture<Experiment736Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment736Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment736Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
