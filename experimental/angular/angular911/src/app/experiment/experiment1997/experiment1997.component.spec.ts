import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1997Component } from './experiment1997.component';

describe('Experiment1997Component', () => {
  let component: Experiment1997Component;
  let fixture: ComponentFixture<Experiment1997Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1997Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1997Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
