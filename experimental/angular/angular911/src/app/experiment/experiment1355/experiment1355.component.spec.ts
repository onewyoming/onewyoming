import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1355Component } from './experiment1355.component';

describe('Experiment1355Component', () => {
  let component: Experiment1355Component;
  let fixture: ComponentFixture<Experiment1355Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1355Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1355Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
