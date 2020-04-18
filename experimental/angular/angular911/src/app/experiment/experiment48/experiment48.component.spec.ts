import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment48Component } from './experiment48.component';

describe('Experiment48Component', () => {
  let component: Experiment48Component;
  let fixture: ComponentFixture<Experiment48Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment48Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment48Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
