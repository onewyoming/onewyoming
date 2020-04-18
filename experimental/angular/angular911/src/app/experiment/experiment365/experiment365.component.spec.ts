import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment365Component } from './experiment365.component';

describe('Experiment365Component', () => {
  let component: Experiment365Component;
  let fixture: ComponentFixture<Experiment365Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment365Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment365Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
