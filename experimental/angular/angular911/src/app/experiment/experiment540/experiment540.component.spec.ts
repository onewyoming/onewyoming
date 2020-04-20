import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment540Component } from './experiment540.component';

describe('Experiment540Component', () => {
  let component: Experiment540Component;
  let fixture: ComponentFixture<Experiment540Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment540Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment540Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
