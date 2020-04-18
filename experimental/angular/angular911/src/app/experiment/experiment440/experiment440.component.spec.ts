import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment440Component } from './experiment440.component';

describe('Experiment440Component', () => {
  let component: Experiment440Component;
  let fixture: ComponentFixture<Experiment440Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment440Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment440Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
