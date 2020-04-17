import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment12Component } from './experiment12.component';

describe('Experiment12Component', () => {
  let component: Experiment12Component;
  let fixture: ComponentFixture<Experiment12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment12Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
