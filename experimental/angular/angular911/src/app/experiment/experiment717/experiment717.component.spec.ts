import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment717Component } from './experiment717.component';

describe('Experiment717Component', () => {
  let component: Experiment717Component;
  let fixture: ComponentFixture<Experiment717Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment717Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment717Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
