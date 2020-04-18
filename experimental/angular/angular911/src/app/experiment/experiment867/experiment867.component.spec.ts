import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment867Component } from './experiment867.component';

describe('Experiment867Component', () => {
  let component: Experiment867Component;
  let fixture: ComponentFixture<Experiment867Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment867Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment867Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
