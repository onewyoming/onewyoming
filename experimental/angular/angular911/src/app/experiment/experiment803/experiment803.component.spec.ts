import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment803Component } from './experiment803.component';

describe('Experiment803Component', () => {
  let component: Experiment803Component;
  let fixture: ComponentFixture<Experiment803Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment803Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment803Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
