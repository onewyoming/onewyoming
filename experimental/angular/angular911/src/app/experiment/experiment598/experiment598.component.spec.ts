import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment598Component } from './experiment598.component';

describe('Experiment598Component', () => {
  let component: Experiment598Component;
  let fixture: ComponentFixture<Experiment598Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment598Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment598Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
