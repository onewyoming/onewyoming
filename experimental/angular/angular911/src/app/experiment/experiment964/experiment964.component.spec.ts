import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment964Component } from './experiment964.component';

describe('Experiment964Component', () => {
  let component: Experiment964Component;
  let fixture: ComponentFixture<Experiment964Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment964Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment964Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
