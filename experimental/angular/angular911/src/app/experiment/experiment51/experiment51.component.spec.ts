import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment51Component } from './experiment51.component';

describe('Experiment51Component', () => {
  let component: Experiment51Component;
  let fixture: ComponentFixture<Experiment51Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment51Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment51Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
