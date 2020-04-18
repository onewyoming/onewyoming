import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment191Component } from './experiment191.component';

describe('Experiment191Component', () => {
  let component: Experiment191Component;
  let fixture: ComponentFixture<Experiment191Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment191Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment191Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
