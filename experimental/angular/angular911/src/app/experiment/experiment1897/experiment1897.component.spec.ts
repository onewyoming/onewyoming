import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1897Component } from './experiment1897.component';

describe('Experiment1897Component', () => {
  let component: Experiment1897Component;
  let fixture: ComponentFixture<Experiment1897Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1897Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1897Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
