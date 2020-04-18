import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1692Component } from './experiment1692.component';

describe('Experiment1692Component', () => {
  let component: Experiment1692Component;
  let fixture: ComponentFixture<Experiment1692Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1692Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1692Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
