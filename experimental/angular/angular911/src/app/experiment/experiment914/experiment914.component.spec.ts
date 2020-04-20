import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment914Component } from './experiment914.component';

describe('Experiment914Component', () => {
  let component: Experiment914Component;
  let fixture: ComponentFixture<Experiment914Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment914Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment914Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
