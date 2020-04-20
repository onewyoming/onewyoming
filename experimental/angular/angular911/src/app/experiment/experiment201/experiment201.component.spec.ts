import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment201Component } from './experiment201.component';

describe('Experiment201Component', () => {
  let component: Experiment201Component;
  let fixture: ComponentFixture<Experiment201Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment201Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment201Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
