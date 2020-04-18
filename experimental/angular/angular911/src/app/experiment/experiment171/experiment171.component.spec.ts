import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment171Component } from './experiment171.component';

describe('Experiment171Component', () => {
  let component: Experiment171Component;
  let fixture: ComponentFixture<Experiment171Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment171Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment171Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
