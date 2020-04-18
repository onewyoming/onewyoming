import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment188Component } from './experiment188.component';

describe('Experiment188Component', () => {
  let component: Experiment188Component;
  let fixture: ComponentFixture<Experiment188Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment188Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment188Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
