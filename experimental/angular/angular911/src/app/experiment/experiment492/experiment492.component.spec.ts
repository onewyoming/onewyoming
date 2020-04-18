import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment492Component } from './experiment492.component';

describe('Experiment492Component', () => {
  let component: Experiment492Component;
  let fixture: ComponentFixture<Experiment492Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment492Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment492Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
