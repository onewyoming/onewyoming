import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment917Component } from './experiment917.component';

describe('Experiment917Component', () => {
  let component: Experiment917Component;
  let fixture: ComponentFixture<Experiment917Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment917Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment917Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
