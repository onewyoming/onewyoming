import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1034Component } from './experiment1034.component';

describe('Experiment1034Component', () => {
  let component: Experiment1034Component;
  let fixture: ComponentFixture<Experiment1034Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1034Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1034Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
