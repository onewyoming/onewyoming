import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1111Component } from './experiment1111.component';

describe('Experiment1111Component', () => {
  let component: Experiment1111Component;
  let fixture: ComponentFixture<Experiment1111Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1111Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1111Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
