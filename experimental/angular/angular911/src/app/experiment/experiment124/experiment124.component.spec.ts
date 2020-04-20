import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment124Component } from './experiment124.component';

describe('Experiment124Component', () => {
  let component: Experiment124Component;
  let fixture: ComponentFixture<Experiment124Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment124Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment124Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
