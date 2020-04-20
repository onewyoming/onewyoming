import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment762Component } from './experiment762.component';

describe('Experiment762Component', () => {
  let component: Experiment762Component;
  let fixture: ComponentFixture<Experiment762Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment762Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment762Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
