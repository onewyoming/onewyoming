import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment122Component } from './experiment122.component';

describe('Experiment122Component', () => {
  let component: Experiment122Component;
  let fixture: ComponentFixture<Experiment122Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment122Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment122Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
