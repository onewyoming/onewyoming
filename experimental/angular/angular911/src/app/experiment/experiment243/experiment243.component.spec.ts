import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment243Component } from './experiment243.component';

describe('Experiment243Component', () => {
  let component: Experiment243Component;
  let fixture: ComponentFixture<Experiment243Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment243Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment243Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
