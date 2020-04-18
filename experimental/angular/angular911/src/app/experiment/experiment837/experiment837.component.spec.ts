import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment837Component } from './experiment837.component';

describe('Experiment837Component', () => {
  let component: Experiment837Component;
  let fixture: ComponentFixture<Experiment837Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment837Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment837Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
