import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment631Component } from './experiment631.component';

describe('Experiment631Component', () => {
  let component: Experiment631Component;
  let fixture: ComponentFixture<Experiment631Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment631Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment631Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
