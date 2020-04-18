import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment981Component } from './experiment981.component';

describe('Experiment981Component', () => {
  let component: Experiment981Component;
  let fixture: ComponentFixture<Experiment981Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment981Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment981Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
