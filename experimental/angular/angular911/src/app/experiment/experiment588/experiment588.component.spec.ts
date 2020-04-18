import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment588Component } from './experiment588.component';

describe('Experiment588Component', () => {
  let component: Experiment588Component;
  let fixture: ComponentFixture<Experiment588Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment588Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment588Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
