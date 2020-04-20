import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1143Component } from './experiment1143.component';

describe('Experiment1143Component', () => {
  let component: Experiment1143Component;
  let fixture: ComponentFixture<Experiment1143Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1143Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1143Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
