import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment612Component } from './experiment612.component';

describe('Experiment612Component', () => {
  let component: Experiment612Component;
  let fixture: ComponentFixture<Experiment612Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment612Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment612Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
