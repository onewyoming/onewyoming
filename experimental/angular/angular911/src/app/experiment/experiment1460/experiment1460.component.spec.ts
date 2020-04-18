import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1460Component } from './experiment1460.component';

describe('Experiment1460Component', () => {
  let component: Experiment1460Component;
  let fixture: ComponentFixture<Experiment1460Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1460Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1460Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
