import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment546Component } from './experiment546.component';

describe('Experiment546Component', () => {
  let component: Experiment546Component;
  let fixture: ComponentFixture<Experiment546Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment546Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment546Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
