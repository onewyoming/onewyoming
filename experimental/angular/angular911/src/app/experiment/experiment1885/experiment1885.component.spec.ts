import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1885Component } from './experiment1885.component';

describe('Experiment1885Component', () => {
  let component: Experiment1885Component;
  let fixture: ComponentFixture<Experiment1885Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1885Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1885Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
