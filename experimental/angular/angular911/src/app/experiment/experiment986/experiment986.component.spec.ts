import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment986Component } from './experiment986.component';

describe('Experiment986Component', () => {
  let component: Experiment986Component;
  let fixture: ComponentFixture<Experiment986Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment986Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment986Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
