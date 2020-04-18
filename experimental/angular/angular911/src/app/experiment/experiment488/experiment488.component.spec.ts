import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment488Component } from './experiment488.component';

describe('Experiment488Component', () => {
  let component: Experiment488Component;
  let fixture: ComponentFixture<Experiment488Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment488Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment488Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
