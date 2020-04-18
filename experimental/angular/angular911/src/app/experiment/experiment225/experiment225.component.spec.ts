import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment225Component } from './experiment225.component';

describe('Experiment225Component', () => {
  let component: Experiment225Component;
  let fixture: ComponentFixture<Experiment225Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment225Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment225Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
