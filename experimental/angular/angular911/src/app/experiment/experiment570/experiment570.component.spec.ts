import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment570Component } from './experiment570.component';

describe('Experiment570Component', () => {
  let component: Experiment570Component;
  let fixture: ComponentFixture<Experiment570Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment570Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment570Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
