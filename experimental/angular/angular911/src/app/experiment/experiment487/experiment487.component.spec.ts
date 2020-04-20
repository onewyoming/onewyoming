import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment487Component } from './experiment487.component';

describe('Experiment487Component', () => {
  let component: Experiment487Component;
  let fixture: ComponentFixture<Experiment487Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment487Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment487Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
