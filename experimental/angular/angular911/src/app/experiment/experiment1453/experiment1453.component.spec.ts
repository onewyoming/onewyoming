import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1453Component } from './experiment1453.component';

describe('Experiment1453Component', () => {
  let component: Experiment1453Component;
  let fixture: ComponentFixture<Experiment1453Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1453Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1453Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
