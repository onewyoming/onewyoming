import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment145Component } from './experiment145.component';

describe('Experiment145Component', () => {
  let component: Experiment145Component;
  let fixture: ComponentFixture<Experiment145Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment145Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment145Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
