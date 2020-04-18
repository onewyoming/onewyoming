import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment903Component } from './experiment903.component';

describe('Experiment903Component', () => {
  let component: Experiment903Component;
  let fixture: ComponentFixture<Experiment903Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment903Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment903Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
