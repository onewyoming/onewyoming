import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment955Component } from './experiment955.component';

describe('Experiment955Component', () => {
  let component: Experiment955Component;
  let fixture: ComponentFixture<Experiment955Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment955Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment955Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
