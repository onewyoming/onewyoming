import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1906Component } from './experiment1906.component';

describe('Experiment1906Component', () => {
  let component: Experiment1906Component;
  let fixture: ComponentFixture<Experiment1906Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1906Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1906Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
