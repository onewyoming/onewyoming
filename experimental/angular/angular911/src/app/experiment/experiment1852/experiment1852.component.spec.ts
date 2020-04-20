import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1852Component } from './experiment1852.component';

describe('Experiment1852Component', () => {
  let component: Experiment1852Component;
  let fixture: ComponentFixture<Experiment1852Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1852Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1852Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
