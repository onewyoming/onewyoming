import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment876Component } from './experiment876.component';

describe('Experiment876Component', () => {
  let component: Experiment876Component;
  let fixture: ComponentFixture<Experiment876Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment876Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment876Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
