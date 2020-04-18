import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment434Component } from './experiment434.component';

describe('Experiment434Component', () => {
  let component: Experiment434Component;
  let fixture: ComponentFixture<Experiment434Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment434Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment434Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
