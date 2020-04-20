import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment426Component } from './experiment426.component';

describe('Experiment426Component', () => {
  let component: Experiment426Component;
  let fixture: ComponentFixture<Experiment426Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment426Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment426Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
