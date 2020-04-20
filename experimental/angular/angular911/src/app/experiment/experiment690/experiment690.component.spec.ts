import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment690Component } from './experiment690.component';

describe('Experiment690Component', () => {
  let component: Experiment690Component;
  let fixture: ComponentFixture<Experiment690Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment690Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment690Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
