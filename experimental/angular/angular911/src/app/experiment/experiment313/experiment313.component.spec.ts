import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment313Component } from './experiment313.component';

describe('Experiment313Component', () => {
  let component: Experiment313Component;
  let fixture: ComponentFixture<Experiment313Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment313Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment313Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
