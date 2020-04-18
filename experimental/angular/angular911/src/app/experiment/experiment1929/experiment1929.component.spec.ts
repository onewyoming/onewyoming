import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1929Component } from './experiment1929.component';

describe('Experiment1929Component', () => {
  let component: Experiment1929Component;
  let fixture: ComponentFixture<Experiment1929Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1929Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1929Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
