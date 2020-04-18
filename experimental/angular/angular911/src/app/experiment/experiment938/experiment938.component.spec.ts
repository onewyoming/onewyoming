import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment938Component } from './experiment938.component';

describe('Experiment938Component', () => {
  let component: Experiment938Component;
  let fixture: ComponentFixture<Experiment938Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment938Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment938Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
