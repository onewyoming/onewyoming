import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1572Component } from './experiment1572.component';

describe('Experiment1572Component', () => {
  let component: Experiment1572Component;
  let fixture: ComponentFixture<Experiment1572Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1572Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1572Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
