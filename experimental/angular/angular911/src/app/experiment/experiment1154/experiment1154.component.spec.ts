import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1154Component } from './experiment1154.component';

describe('Experiment1154Component', () => {
  let component: Experiment1154Component;
  let fixture: ComponentFixture<Experiment1154Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1154Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1154Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
