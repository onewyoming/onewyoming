import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1963Component } from './experiment1963.component';

describe('Experiment1963Component', () => {
  let component: Experiment1963Component;
  let fixture: ComponentFixture<Experiment1963Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1963Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1963Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
