import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment909Component } from './experiment909.component';

describe('Experiment909Component', () => {
  let component: Experiment909Component;
  let fixture: ComponentFixture<Experiment909Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment909Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment909Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
