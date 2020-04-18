import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1884Component } from './experiment1884.component';

describe('Experiment1884Component', () => {
  let component: Experiment1884Component;
  let fixture: ComponentFixture<Experiment1884Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1884Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1884Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
