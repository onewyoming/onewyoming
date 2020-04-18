import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment343Component } from './experiment343.component';

describe('Experiment343Component', () => {
  let component: Experiment343Component;
  let fixture: ComponentFixture<Experiment343Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment343Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment343Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
