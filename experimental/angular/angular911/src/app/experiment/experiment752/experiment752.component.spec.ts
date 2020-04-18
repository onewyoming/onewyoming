import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment752Component } from './experiment752.component';

describe('Experiment752Component', () => {
  let component: Experiment752Component;
  let fixture: ComponentFixture<Experiment752Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment752Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment752Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
