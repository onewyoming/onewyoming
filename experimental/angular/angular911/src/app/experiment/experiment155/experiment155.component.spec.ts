import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment155Component } from './experiment155.component';

describe('Experiment155Component', () => {
  let component: Experiment155Component;
  let fixture: ComponentFixture<Experiment155Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment155Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment155Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
