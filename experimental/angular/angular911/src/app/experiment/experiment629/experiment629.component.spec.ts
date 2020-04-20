import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment629Component } from './experiment629.component';

describe('Experiment629Component', () => {
  let component: Experiment629Component;
  let fixture: ComponentFixture<Experiment629Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment629Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment629Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
