import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1531Component } from './experiment1531.component';

describe('Experiment1531Component', () => {
  let component: Experiment1531Component;
  let fixture: ComponentFixture<Experiment1531Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1531Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1531Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
