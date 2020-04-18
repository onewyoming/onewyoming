import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment655Component } from './experiment655.component';

describe('Experiment655Component', () => {
  let component: Experiment655Component;
  let fixture: ComponentFixture<Experiment655Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment655Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment655Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
