import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment871Component } from './experiment871.component';

describe('Experiment871Component', () => {
  let component: Experiment871Component;
  let fixture: ComponentFixture<Experiment871Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment871Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment871Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
