import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1829Component } from './experiment1829.component';

describe('Experiment1829Component', () => {
  let component: Experiment1829Component;
  let fixture: ComponentFixture<Experiment1829Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1829Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1829Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
