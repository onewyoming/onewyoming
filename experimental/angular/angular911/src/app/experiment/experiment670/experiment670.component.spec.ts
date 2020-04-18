import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment670Component } from './experiment670.component';

describe('Experiment670Component', () => {
  let component: Experiment670Component;
  let fixture: ComponentFixture<Experiment670Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment670Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment670Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
