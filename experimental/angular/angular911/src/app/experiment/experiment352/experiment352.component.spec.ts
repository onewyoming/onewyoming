import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment352Component } from './experiment352.component';

describe('Experiment352Component', () => {
  let component: Experiment352Component;
  let fixture: ComponentFixture<Experiment352Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment352Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment352Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
