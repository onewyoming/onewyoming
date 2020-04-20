import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment558Component } from './experiment558.component';

describe('Experiment558Component', () => {
  let component: Experiment558Component;
  let fixture: ComponentFixture<Experiment558Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment558Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment558Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
