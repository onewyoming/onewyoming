import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1331Component } from './experiment1331.component';

describe('Experiment1331Component', () => {
  let component: Experiment1331Component;
  let fixture: ComponentFixture<Experiment1331Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1331Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1331Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
