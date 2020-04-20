import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment937Component } from './experiment937.component';

describe('Experiment937Component', () => {
  let component: Experiment937Component;
  let fixture: ComponentFixture<Experiment937Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment937Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment937Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
