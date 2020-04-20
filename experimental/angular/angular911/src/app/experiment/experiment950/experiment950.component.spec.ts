import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment950Component } from './experiment950.component';

describe('Experiment950Component', () => {
  let component: Experiment950Component;
  let fixture: ComponentFixture<Experiment950Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment950Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment950Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
