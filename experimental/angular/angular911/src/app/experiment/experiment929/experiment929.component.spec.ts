import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment929Component } from './experiment929.component';

describe('Experiment929Component', () => {
  let component: Experiment929Component;
  let fixture: ComponentFixture<Experiment929Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment929Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment929Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
