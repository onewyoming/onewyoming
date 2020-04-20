import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1522Component } from './experiment1522.component';

describe('Experiment1522Component', () => {
  let component: Experiment1522Component;
  let fixture: ComponentFixture<Experiment1522Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1522Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1522Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
