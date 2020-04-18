import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1528Component } from './experiment1528.component';

describe('Experiment1528Component', () => {
  let component: Experiment1528Component;
  let fixture: ComponentFixture<Experiment1528Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1528Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1528Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
