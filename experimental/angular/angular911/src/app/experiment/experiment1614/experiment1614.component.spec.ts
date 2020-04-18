import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1614Component } from './experiment1614.component';

describe('Experiment1614Component', () => {
  let component: Experiment1614Component;
  let fixture: ComponentFixture<Experiment1614Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1614Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1614Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
