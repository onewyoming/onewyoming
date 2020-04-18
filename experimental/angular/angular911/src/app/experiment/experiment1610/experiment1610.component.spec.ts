import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1610Component } from './experiment1610.component';

describe('Experiment1610Component', () => {
  let component: Experiment1610Component;
  let fixture: ComponentFixture<Experiment1610Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1610Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1610Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
