import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1819Component } from './experiment1819.component';

describe('Experiment1819Component', () => {
  let component: Experiment1819Component;
  let fixture: ComponentFixture<Experiment1819Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1819Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1819Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
