import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1112Component } from './experiment1112.component';

describe('Experiment1112Component', () => {
  let component: Experiment1112Component;
  let fixture: ComponentFixture<Experiment1112Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1112Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1112Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
