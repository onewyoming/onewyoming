import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1311Component } from './experiment1311.component';

describe('Experiment1311Component', () => {
  let component: Experiment1311Component;
  let fixture: ComponentFixture<Experiment1311Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1311Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1311Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
