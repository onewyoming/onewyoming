import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment210Component } from './experiment210.component';

describe('Experiment210Component', () => {
  let component: Experiment210Component;
  let fixture: ComponentFixture<Experiment210Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment210Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment210Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
