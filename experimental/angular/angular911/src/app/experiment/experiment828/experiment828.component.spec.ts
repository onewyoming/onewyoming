import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment828Component } from './experiment828.component';

describe('Experiment828Component', () => {
  let component: Experiment828Component;
  let fixture: ComponentFixture<Experiment828Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment828Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment828Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
