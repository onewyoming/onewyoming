import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment219Component } from './experiment219.component';

describe('Experiment219Component', () => {
  let component: Experiment219Component;
  let fixture: ComponentFixture<Experiment219Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment219Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment219Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
