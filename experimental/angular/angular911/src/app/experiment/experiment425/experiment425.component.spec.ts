import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment425Component } from './experiment425.component';

describe('Experiment425Component', () => {
  let component: Experiment425Component;
  let fixture: ComponentFixture<Experiment425Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment425Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment425Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
