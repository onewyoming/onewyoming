import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment790Component } from './experiment790.component';

describe('Experiment790Component', () => {
  let component: Experiment790Component;
  let fixture: ComponentFixture<Experiment790Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment790Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment790Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
