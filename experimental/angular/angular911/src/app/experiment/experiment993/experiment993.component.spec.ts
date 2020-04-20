import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment993Component } from './experiment993.component';

describe('Experiment993Component', () => {
  let component: Experiment993Component;
  let fixture: ComponentFixture<Experiment993Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment993Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment993Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
