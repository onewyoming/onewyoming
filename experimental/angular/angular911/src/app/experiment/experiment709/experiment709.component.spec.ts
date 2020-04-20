import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment709Component } from './experiment709.component';

describe('Experiment709Component', () => {
  let component: Experiment709Component;
  let fixture: ComponentFixture<Experiment709Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment709Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment709Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
