import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment718Component } from './experiment718.component';

describe('Experiment718Component', () => {
  let component: Experiment718Component;
  let fixture: ComponentFixture<Experiment718Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment718Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment718Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
