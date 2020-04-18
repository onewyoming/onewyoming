import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment895Component } from './experiment895.component';

describe('Experiment895Component', () => {
  let component: Experiment895Component;
  let fixture: ComponentFixture<Experiment895Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment895Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment895Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
