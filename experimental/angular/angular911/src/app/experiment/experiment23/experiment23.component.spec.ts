import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment23Component } from './experiment23.component';

describe('Experiment23Component', () => {
  let component: Experiment23Component;
  let fixture: ComponentFixture<Experiment23Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment23Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
