import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment275Component } from './experiment275.component';

describe('Experiment275Component', () => {
  let component: Experiment275Component;
  let fixture: ComponentFixture<Experiment275Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment275Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment275Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
