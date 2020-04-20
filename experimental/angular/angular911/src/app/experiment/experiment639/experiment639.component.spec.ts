import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment639Component } from './experiment639.component';

describe('Experiment639Component', () => {
  let component: Experiment639Component;
  let fixture: ComponentFixture<Experiment639Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment639Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment639Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
