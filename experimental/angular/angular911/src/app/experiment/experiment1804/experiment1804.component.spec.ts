import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1804Component } from './experiment1804.component';

describe('Experiment1804Component', () => {
  let component: Experiment1804Component;
  let fixture: ComponentFixture<Experiment1804Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1804Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1804Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
