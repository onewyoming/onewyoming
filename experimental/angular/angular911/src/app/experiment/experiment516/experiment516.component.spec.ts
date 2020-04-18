import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment516Component } from './experiment516.component';

describe('Experiment516Component', () => {
  let component: Experiment516Component;
  let fixture: ComponentFixture<Experiment516Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment516Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment516Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
