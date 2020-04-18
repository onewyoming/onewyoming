import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1392Component } from './experiment1392.component';

describe('Experiment1392Component', () => {
  let component: Experiment1392Component;
  let fixture: ComponentFixture<Experiment1392Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1392Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1392Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
