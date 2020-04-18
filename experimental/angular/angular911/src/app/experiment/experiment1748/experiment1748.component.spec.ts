import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1748Component } from './experiment1748.component';

describe('Experiment1748Component', () => {
  let component: Experiment1748Component;
  let fixture: ComponentFixture<Experiment1748Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1748Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1748Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
