import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment342Component } from './experiment342.component';

describe('Experiment342Component', () => {
  let component: Experiment342Component;
  let fixture: ComponentFixture<Experiment342Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment342Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment342Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
