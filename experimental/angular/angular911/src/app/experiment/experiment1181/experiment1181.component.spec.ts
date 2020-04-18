import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1181Component } from './experiment1181.component';

describe('Experiment1181Component', () => {
  let component: Experiment1181Component;
  let fixture: ComponentFixture<Experiment1181Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1181Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1181Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
