import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1862Component } from './experiment1862.component';

describe('Experiment1862Component', () => {
  let component: Experiment1862Component;
  let fixture: ComponentFixture<Experiment1862Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1862Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1862Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
