import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1650Component } from './experiment1650.component';

describe('Experiment1650Component', () => {
  let component: Experiment1650Component;
  let fixture: ComponentFixture<Experiment1650Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1650Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1650Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
