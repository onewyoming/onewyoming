import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment441Component } from './experiment441.component';

describe('Experiment441Component', () => {
  let component: Experiment441Component;
  let fixture: ComponentFixture<Experiment441Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment441Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment441Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
