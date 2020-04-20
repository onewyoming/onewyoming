import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1838Component } from './experiment1838.component';

describe('Experiment1838Component', () => {
  let component: Experiment1838Component;
  let fixture: ComponentFixture<Experiment1838Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1838Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1838Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
