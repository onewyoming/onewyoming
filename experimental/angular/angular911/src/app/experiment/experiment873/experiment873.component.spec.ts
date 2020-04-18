import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment873Component } from './experiment873.component';

describe('Experiment873Component', () => {
  let component: Experiment873Component;
  let fixture: ComponentFixture<Experiment873Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment873Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment873Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
