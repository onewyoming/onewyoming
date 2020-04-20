import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment43Component } from './experiment43.component';

describe('Experiment43Component', () => {
  let component: Experiment43Component;
  let fixture: ComponentFixture<Experiment43Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment43Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment43Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
