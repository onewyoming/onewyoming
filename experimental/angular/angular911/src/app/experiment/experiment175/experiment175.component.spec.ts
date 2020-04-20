import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment175Component } from './experiment175.component';

describe('Experiment175Component', () => {
  let component: Experiment175Component;
  let fixture: ComponentFixture<Experiment175Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment175Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment175Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
