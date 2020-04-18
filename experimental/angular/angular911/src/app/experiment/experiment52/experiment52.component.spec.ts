import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment52Component } from './experiment52.component';

describe('Experiment52Component', () => {
  let component: Experiment52Component;
  let fixture: ComponentFixture<Experiment52Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment52Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment52Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
