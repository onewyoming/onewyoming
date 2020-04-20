import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1029Component } from './experiment1029.component';

describe('Experiment1029Component', () => {
  let component: Experiment1029Component;
  let fixture: ComponentFixture<Experiment1029Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1029Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1029Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
