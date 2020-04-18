import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1775Component } from './experiment1775.component';

describe('Experiment1775Component', () => {
  let component: Experiment1775Component;
  let fixture: ComponentFixture<Experiment1775Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1775Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1775Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
