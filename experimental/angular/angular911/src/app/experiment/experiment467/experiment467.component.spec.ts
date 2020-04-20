import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment467Component } from './experiment467.component';

describe('Experiment467Component', () => {
  let component: Experiment467Component;
  let fixture: ComponentFixture<Experiment467Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment467Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment467Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
