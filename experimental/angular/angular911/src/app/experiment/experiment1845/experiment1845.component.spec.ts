import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1845Component } from './experiment1845.component';

describe('Experiment1845Component', () => {
  let component: Experiment1845Component;
  let fixture: ComponentFixture<Experiment1845Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1845Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1845Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
