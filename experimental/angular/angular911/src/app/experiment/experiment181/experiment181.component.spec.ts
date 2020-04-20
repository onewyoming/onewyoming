import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment181Component } from './experiment181.component';

describe('Experiment181Component', () => {
  let component: Experiment181Component;
  let fixture: ComponentFixture<Experiment181Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment181Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment181Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
