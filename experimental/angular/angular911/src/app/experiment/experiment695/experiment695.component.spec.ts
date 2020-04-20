import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment695Component } from './experiment695.component';

describe('Experiment695Component', () => {
  let component: Experiment695Component;
  let fixture: ComponentFixture<Experiment695Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment695Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment695Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
