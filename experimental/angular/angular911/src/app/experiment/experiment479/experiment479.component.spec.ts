import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment479Component } from './experiment479.component';

describe('Experiment479Component', () => {
  let component: Experiment479Component;
  let fixture: ComponentFixture<Experiment479Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment479Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment479Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
