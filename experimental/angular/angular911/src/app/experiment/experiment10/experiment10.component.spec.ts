import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment10Component } from './experiment10.component';

describe('Experiment10Component', () => {
  let component: Experiment10Component;
  let fixture: ComponentFixture<Experiment10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
