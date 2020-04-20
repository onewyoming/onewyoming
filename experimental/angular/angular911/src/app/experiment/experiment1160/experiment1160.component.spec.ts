import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1160Component } from './experiment1160.component';

describe('Experiment1160Component', () => {
  let component: Experiment1160Component;
  let fixture: ComponentFixture<Experiment1160Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1160Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1160Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
