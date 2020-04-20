import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1156Component } from './experiment1156.component';

describe('Experiment1156Component', () => {
  let component: Experiment1156Component;
  let fixture: ComponentFixture<Experiment1156Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1156Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1156Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
