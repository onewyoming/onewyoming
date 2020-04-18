import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1971Component } from './experiment1971.component';

describe('Experiment1971Component', () => {
  let component: Experiment1971Component;
  let fixture: ComponentFixture<Experiment1971Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1971Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1971Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
