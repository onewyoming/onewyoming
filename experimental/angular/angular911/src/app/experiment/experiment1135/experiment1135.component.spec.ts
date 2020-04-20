import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1135Component } from './experiment1135.component';

describe('Experiment1135Component', () => {
  let component: Experiment1135Component;
  let fixture: ComponentFixture<Experiment1135Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1135Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1135Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
