import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1344Component } from './experiment1344.component';

describe('Experiment1344Component', () => {
  let component: Experiment1344Component;
  let fixture: ComponentFixture<Experiment1344Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1344Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1344Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
