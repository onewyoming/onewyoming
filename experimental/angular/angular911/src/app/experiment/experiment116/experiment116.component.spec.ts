import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment116Component } from './experiment116.component';

describe('Experiment116Component', () => {
  let component: Experiment116Component;
  let fixture: ComponentFixture<Experiment116Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment116Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment116Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
