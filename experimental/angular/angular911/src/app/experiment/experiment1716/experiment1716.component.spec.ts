import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1716Component } from './experiment1716.component';

describe('Experiment1716Component', () => {
  let component: Experiment1716Component;
  let fixture: ComponentFixture<Experiment1716Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1716Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1716Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
