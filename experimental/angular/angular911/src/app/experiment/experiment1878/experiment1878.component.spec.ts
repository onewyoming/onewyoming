import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1878Component } from './experiment1878.component';

describe('Experiment1878Component', () => {
  let component: Experiment1878Component;
  let fixture: ComponentFixture<Experiment1878Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1878Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1878Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
