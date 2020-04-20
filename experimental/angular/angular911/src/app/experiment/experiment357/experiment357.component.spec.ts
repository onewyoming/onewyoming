import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment357Component } from './experiment357.component';

describe('Experiment357Component', () => {
  let component: Experiment357Component;
  let fixture: ComponentFixture<Experiment357Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment357Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment357Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
