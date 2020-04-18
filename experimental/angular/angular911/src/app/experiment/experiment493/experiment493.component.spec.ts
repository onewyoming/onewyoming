import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment493Component } from './experiment493.component';

describe('Experiment493Component', () => {
  let component: Experiment493Component;
  let fixture: ComponentFixture<Experiment493Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment493Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment493Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
