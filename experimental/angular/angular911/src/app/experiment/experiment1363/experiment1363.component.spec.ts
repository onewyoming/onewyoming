import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1363Component } from './experiment1363.component';

describe('Experiment1363Component', () => {
  let component: Experiment1363Component;
  let fixture: ComponentFixture<Experiment1363Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1363Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1363Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
