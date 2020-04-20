import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1080Component } from './experiment1080.component';

describe('Experiment1080Component', () => {
  let component: Experiment1080Component;
  let fixture: ComponentFixture<Experiment1080Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1080Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1080Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
