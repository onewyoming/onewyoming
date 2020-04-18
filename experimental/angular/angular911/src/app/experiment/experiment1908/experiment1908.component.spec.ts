import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1908Component } from './experiment1908.component';

describe('Experiment1908Component', () => {
  let component: Experiment1908Component;
  let fixture: ComponentFixture<Experiment1908Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1908Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1908Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
