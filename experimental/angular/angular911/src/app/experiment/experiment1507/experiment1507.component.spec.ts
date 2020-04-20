import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1507Component } from './experiment1507.component';

describe('Experiment1507Component', () => {
  let component: Experiment1507Component;
  let fixture: ComponentFixture<Experiment1507Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1507Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1507Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
