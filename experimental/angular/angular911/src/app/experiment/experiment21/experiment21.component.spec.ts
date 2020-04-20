import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment21Component } from './experiment21.component';

describe('Experiment21Component', () => {
  let component: Experiment21Component;
  let fixture: ComponentFixture<Experiment21Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment21Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
