import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1840Component } from './experiment1840.component';

describe('Experiment1840Component', () => {
  let component: Experiment1840Component;
  let fixture: ComponentFixture<Experiment1840Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1840Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1840Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
