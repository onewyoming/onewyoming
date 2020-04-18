import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment226Component } from './experiment226.component';

describe('Experiment226Component', () => {
  let component: Experiment226Component;
  let fixture: ComponentFixture<Experiment226Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment226Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment226Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
