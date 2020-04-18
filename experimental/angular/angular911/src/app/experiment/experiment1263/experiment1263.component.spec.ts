import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1263Component } from './experiment1263.component';

describe('Experiment1263Component', () => {
  let component: Experiment1263Component;
  let fixture: ComponentFixture<Experiment1263Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1263Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1263Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
