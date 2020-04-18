import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment187Component } from './experiment187.component';

describe('Experiment187Component', () => {
  let component: Experiment187Component;
  let fixture: ComponentFixture<Experiment187Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment187Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment187Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
