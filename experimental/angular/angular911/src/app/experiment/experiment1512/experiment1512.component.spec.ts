import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1512Component } from './experiment1512.component';

describe('Experiment1512Component', () => {
  let component: Experiment1512Component;
  let fixture: ComponentFixture<Experiment1512Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1512Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1512Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
