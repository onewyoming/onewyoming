import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1190Component } from './experiment1190.component';

describe('Experiment1190Component', () => {
  let component: Experiment1190Component;
  let fixture: ComponentFixture<Experiment1190Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1190Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1190Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
