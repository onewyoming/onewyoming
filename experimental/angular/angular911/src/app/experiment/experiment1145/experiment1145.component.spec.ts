import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1145Component } from './experiment1145.component';

describe('Experiment1145Component', () => {
  let component: Experiment1145Component;
  let fixture: ComponentFixture<Experiment1145Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1145Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1145Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
