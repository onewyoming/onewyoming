import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1792Component } from './experiment1792.component';

describe('Experiment1792Component', () => {
  let component: Experiment1792Component;
  let fixture: ComponentFixture<Experiment1792Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1792Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1792Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
