import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment183Component } from './experiment183.component';

describe('Experiment183Component', () => {
  let component: Experiment183Component;
  let fixture: ComponentFixture<Experiment183Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment183Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment183Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
