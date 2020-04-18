import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1404Component } from './experiment1404.component';

describe('Experiment1404Component', () => {
  let component: Experiment1404Component;
  let fixture: ComponentFixture<Experiment1404Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1404Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
