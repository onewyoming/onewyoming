import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment827Component } from './experiment827.component';

describe('Experiment827Component', () => {
  let component: Experiment827Component;
  let fixture: ComponentFixture<Experiment827Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment827Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment827Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
