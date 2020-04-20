import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment889Component } from './experiment889.component';

describe('Experiment889Component', () => {
  let component: Experiment889Component;
  let fixture: ComponentFixture<Experiment889Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment889Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment889Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
