import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment236Component } from './experiment236.component';

describe('Experiment236Component', () => {
  let component: Experiment236Component;
  let fixture: ComponentFixture<Experiment236Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment236Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment236Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
