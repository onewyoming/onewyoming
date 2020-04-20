import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1193Component } from './experiment1193.component';

describe('Experiment1193Component', () => {
  let component: Experiment1193Component;
  let fixture: ComponentFixture<Experiment1193Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1193Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1193Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
