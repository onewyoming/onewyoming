import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment663Component } from './experiment663.component';

describe('Experiment663Component', () => {
  let component: Experiment663Component;
  let fixture: ComponentFixture<Experiment663Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment663Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment663Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
