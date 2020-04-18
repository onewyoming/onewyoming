import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment706Component } from './experiment706.component';

describe('Experiment706Component', () => {
  let component: Experiment706Component;
  let fixture: ComponentFixture<Experiment706Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment706Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment706Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
