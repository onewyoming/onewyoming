import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1718Component } from './experiment1718.component';

describe('Experiment1718Component', () => {
  let component: Experiment1718Component;
  let fixture: ComponentFixture<Experiment1718Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1718Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1718Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
