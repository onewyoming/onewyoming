import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1861Component } from './experiment1861.component';

describe('Experiment1861Component', () => {
  let component: Experiment1861Component;
  let fixture: ComponentFixture<Experiment1861Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1861Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1861Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
