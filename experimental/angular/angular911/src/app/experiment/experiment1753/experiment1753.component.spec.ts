import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1753Component } from './experiment1753.component';

describe('Experiment1753Component', () => {
  let component: Experiment1753Component;
  let fixture: ComponentFixture<Experiment1753Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1753Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1753Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
