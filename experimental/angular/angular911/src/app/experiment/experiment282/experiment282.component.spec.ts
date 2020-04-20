import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment282Component } from './experiment282.component';

describe('Experiment282Component', () => {
  let component: Experiment282Component;
  let fixture: ComponentFixture<Experiment282Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment282Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment282Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
