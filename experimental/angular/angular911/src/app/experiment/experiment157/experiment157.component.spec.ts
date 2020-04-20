import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment157Component } from './experiment157.component';

describe('Experiment157Component', () => {
  let component: Experiment157Component;
  let fixture: ComponentFixture<Experiment157Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment157Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment157Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
