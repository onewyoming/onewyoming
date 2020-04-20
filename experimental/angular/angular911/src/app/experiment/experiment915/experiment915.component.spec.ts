import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment915Component } from './experiment915.component';

describe('Experiment915Component', () => {
  let component: Experiment915Component;
  let fixture: ComponentFixture<Experiment915Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment915Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment915Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
