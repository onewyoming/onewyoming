import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment263Component } from './experiment263.component';

describe('Experiment263Component', () => {
  let component: Experiment263Component;
  let fixture: ComponentFixture<Experiment263Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment263Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment263Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
