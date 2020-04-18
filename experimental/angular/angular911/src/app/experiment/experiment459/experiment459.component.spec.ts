import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment459Component } from './experiment459.component';

describe('Experiment459Component', () => {
  let component: Experiment459Component;
  let fixture: ComponentFixture<Experiment459Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment459Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment459Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
