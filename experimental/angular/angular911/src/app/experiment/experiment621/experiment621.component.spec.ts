import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment621Component } from './experiment621.component';

describe('Experiment621Component', () => {
  let component: Experiment621Component;
  let fixture: ComponentFixture<Experiment621Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment621Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment621Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
