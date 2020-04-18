import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment580Component } from './experiment580.component';

describe('Experiment580Component', () => {
  let component: Experiment580Component;
  let fixture: ComponentFixture<Experiment580Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment580Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment580Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
