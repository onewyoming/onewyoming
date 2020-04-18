import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1603Component } from './experiment1603.component';

describe('Experiment1603Component', () => {
  let component: Experiment1603Component;
  let fixture: ComponentFixture<Experiment1603Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1603Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1603Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
