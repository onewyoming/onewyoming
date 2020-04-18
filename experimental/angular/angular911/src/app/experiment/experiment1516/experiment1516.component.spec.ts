import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1516Component } from './experiment1516.component';

describe('Experiment1516Component', () => {
  let component: Experiment1516Component;
  let fixture: ComponentFixture<Experiment1516Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1516Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1516Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
