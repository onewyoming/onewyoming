import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment764Component } from './experiment764.component';

describe('Experiment764Component', () => {
  let component: Experiment764Component;
  let fixture: ComponentFixture<Experiment764Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment764Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment764Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
