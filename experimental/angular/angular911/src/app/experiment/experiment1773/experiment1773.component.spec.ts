import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1773Component } from './experiment1773.component';

describe('Experiment1773Component', () => {
  let component: Experiment1773Component;
  let fixture: ComponentFixture<Experiment1773Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1773Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1773Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
