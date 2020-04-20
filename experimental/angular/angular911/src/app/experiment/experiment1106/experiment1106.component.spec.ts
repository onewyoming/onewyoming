import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1106Component } from './experiment1106.component';

describe('Experiment1106Component', () => {
  let component: Experiment1106Component;
  let fixture: ComponentFixture<Experiment1106Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1106Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1106Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
