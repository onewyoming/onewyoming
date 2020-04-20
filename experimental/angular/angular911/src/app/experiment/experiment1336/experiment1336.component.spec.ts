import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1336Component } from './experiment1336.component';

describe('Experiment1336Component', () => {
  let component: Experiment1336Component;
  let fixture: ComponentFixture<Experiment1336Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1336Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1336Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
