import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment963Component } from './experiment963.component';

describe('Experiment963Component', () => {
  let component: Experiment963Component;
  let fixture: ComponentFixture<Experiment963Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment963Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment963Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
