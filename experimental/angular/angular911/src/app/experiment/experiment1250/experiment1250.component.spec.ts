import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1250Component } from './experiment1250.component';

describe('Experiment1250Component', () => {
  let component: Experiment1250Component;
  let fixture: ComponentFixture<Experiment1250Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1250Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1250Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
