import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1049Component } from './experiment1049.component';

describe('Experiment1049Component', () => {
  let component: Experiment1049Component;
  let fixture: ComponentFixture<Experiment1049Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1049Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1049Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
