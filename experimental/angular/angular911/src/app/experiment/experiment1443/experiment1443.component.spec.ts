import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1443Component } from './experiment1443.component';

describe('Experiment1443Component', () => {
  let component: Experiment1443Component;
  let fixture: ComponentFixture<Experiment1443Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1443Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1443Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
