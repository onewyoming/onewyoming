import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment251Component } from './experiment251.component';

describe('Experiment251Component', () => {
  let component: Experiment251Component;
  let fixture: ComponentFixture<Experiment251Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment251Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment251Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
