import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment39Component } from './experiment39.component';

describe('Experiment39Component', () => {
  let component: Experiment39Component;
  let fixture: ComponentFixture<Experiment39Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment39Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment39Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
