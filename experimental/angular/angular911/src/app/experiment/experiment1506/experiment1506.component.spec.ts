import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1506Component } from './experiment1506.component';

describe('Experiment1506Component', () => {
  let component: Experiment1506Component;
  let fixture: ComponentFixture<Experiment1506Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1506Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1506Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
