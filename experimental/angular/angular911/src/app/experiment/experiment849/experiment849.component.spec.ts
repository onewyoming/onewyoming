import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment849Component } from './experiment849.component';

describe('Experiment849Component', () => {
  let component: Experiment849Component;
  let fixture: ComponentFixture<Experiment849Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment849Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment849Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
