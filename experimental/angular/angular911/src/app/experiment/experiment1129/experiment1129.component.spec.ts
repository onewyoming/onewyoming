import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1129Component } from './experiment1129.component';

describe('Experiment1129Component', () => {
  let component: Experiment1129Component;
  let fixture: ComponentFixture<Experiment1129Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1129Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1129Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
