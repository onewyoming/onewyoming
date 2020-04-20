import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment57Component } from './experiment57.component';

describe('Experiment57Component', () => {
  let component: Experiment57Component;
  let fixture: ComponentFixture<Experiment57Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment57Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment57Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
