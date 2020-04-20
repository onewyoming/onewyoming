import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1621Component } from './experiment1621.component';

describe('Experiment1621Component', () => {
  let component: Experiment1621Component;
  let fixture: ComponentFixture<Experiment1621Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1621Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1621Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
