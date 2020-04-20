import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1318Component } from './experiment1318.component';

describe('Experiment1318Component', () => {
  let component: Experiment1318Component;
  let fixture: ComponentFixture<Experiment1318Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1318Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1318Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
