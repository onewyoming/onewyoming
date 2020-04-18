import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment554Component } from './experiment554.component';

describe('Experiment554Component', () => {
  let component: Experiment554Component;
  let fixture: ComponentFixture<Experiment554Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment554Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment554Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
