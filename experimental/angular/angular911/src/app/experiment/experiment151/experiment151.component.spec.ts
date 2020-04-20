import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment151Component } from './experiment151.component';

describe('Experiment151Component', () => {
  let component: Experiment151Component;
  let fixture: ComponentFixture<Experiment151Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment151Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment151Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
