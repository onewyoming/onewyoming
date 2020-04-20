import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1166Component } from './experiment1166.component';

describe('Experiment1166Component', () => {
  let component: Experiment1166Component;
  let fixture: ComponentFixture<Experiment1166Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1166Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1166Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
