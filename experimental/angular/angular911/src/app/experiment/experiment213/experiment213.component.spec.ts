import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment213Component } from './experiment213.component';

describe('Experiment213Component', () => {
  let component: Experiment213Component;
  let fixture: ComponentFixture<Experiment213Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment213Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment213Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
