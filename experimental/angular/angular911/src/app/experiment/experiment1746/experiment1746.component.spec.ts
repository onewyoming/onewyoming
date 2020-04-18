import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1746Component } from './experiment1746.component';

describe('Experiment1746Component', () => {
  let component: Experiment1746Component;
  let fixture: ComponentFixture<Experiment1746Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1746Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1746Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
