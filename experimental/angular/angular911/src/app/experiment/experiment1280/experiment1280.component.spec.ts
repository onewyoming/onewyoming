import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1280Component } from './experiment1280.component';

describe('Experiment1280Component', () => {
  let component: Experiment1280Component;
  let fixture: ComponentFixture<Experiment1280Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1280Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1280Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
