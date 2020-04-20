import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1735Component } from './experiment1735.component';

describe('Experiment1735Component', () => {
  let component: Experiment1735Component;
  let fixture: ComponentFixture<Experiment1735Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1735Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1735Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
