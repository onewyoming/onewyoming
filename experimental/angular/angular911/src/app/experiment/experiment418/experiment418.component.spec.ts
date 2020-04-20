import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment418Component } from './experiment418.component';

describe('Experiment418Component', () => {
  let component: Experiment418Component;
  let fixture: ComponentFixture<Experiment418Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment418Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment418Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
