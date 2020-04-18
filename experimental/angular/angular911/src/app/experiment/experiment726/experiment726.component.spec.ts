import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment726Component } from './experiment726.component';

describe('Experiment726Component', () => {
  let component: Experiment726Component;
  let fixture: ComponentFixture<Experiment726Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment726Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment726Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
