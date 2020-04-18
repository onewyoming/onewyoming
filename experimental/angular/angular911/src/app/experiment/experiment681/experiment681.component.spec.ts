import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment681Component } from './experiment681.component';

describe('Experiment681Component', () => {
  let component: Experiment681Component;
  let fixture: ComponentFixture<Experiment681Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment681Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment681Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
