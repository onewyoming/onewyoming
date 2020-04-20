import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment208Component } from './experiment208.component';

describe('Experiment208Component', () => {
  let component: Experiment208Component;
  let fixture: ComponentFixture<Experiment208Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment208Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment208Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
