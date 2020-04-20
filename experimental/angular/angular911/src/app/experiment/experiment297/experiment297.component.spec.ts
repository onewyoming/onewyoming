import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment297Component } from './experiment297.component';

describe('Experiment297Component', () => {
  let component: Experiment297Component;
  let fixture: ComponentFixture<Experiment297Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment297Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment297Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
