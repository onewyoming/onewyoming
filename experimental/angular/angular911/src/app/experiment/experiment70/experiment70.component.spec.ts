import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment70Component } from './experiment70.component';

describe('Experiment70Component', () => {
  let component: Experiment70Component;
  let fixture: ComponentFixture<Experiment70Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment70Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment70Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
