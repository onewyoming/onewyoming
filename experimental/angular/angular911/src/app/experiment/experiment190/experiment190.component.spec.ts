import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment190Component } from './experiment190.component';

describe('Experiment190Component', () => {
  let component: Experiment190Component;
  let fixture: ComponentFixture<Experiment190Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment190Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment190Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
