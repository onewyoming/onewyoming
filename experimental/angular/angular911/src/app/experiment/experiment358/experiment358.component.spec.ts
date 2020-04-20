import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment358Component } from './experiment358.component';

describe('Experiment358Component', () => {
  let component: Experiment358Component;
  let fixture: ComponentFixture<Experiment358Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment358Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment358Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
