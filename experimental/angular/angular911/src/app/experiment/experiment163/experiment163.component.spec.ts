import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment163Component } from './experiment163.component';

describe('Experiment163Component', () => {
  let component: Experiment163Component;
  let fixture: ComponentFixture<Experiment163Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment163Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment163Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
