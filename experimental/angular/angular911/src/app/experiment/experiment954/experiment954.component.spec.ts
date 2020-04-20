import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment954Component } from './experiment954.component';

describe('Experiment954Component', () => {
  let component: Experiment954Component;
  let fixture: ComponentFixture<Experiment954Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment954Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment954Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
