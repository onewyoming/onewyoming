import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment178Component } from './experiment178.component';

describe('Experiment178Component', () => {
  let component: Experiment178Component;
  let fixture: ComponentFixture<Experiment178Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment178Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment178Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
