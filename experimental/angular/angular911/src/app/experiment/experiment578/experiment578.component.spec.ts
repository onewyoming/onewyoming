import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment578Component } from './experiment578.component';

describe('Experiment578Component', () => {
  let component: Experiment578Component;
  let fixture: ComponentFixture<Experiment578Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment578Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment578Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
