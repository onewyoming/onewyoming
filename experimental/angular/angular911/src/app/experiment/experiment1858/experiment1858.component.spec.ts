import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1858Component } from './experiment1858.component';

describe('Experiment1858Component', () => {
  let component: Experiment1858Component;
  let fixture: ComponentFixture<Experiment1858Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1858Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1858Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
