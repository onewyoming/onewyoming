import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment442Component } from './experiment442.component';

describe('Experiment442Component', () => {
  let component: Experiment442Component;
  let fixture: ComponentFixture<Experiment442Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment442Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment442Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
