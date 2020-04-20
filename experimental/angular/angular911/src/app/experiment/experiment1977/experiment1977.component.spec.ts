import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1977Component } from './experiment1977.component';

describe('Experiment1977Component', () => {
  let component: Experiment1977Component;
  let fixture: ComponentFixture<Experiment1977Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1977Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1977Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
