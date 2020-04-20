import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1381Component } from './experiment1381.component';

describe('Experiment1381Component', () => {
  let component: Experiment1381Component;
  let fixture: ComponentFixture<Experiment1381Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1381Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1381Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
