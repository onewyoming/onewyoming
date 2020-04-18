import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1586Component } from './experiment1586.component';

describe('Experiment1586Component', () => {
  let component: Experiment1586Component;
  let fixture: ComponentFixture<Experiment1586Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1586Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1586Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
