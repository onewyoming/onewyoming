import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment587Component } from './experiment587.component';

describe('Experiment587Component', () => {
  let component: Experiment587Component;
  let fixture: ComponentFixture<Experiment587Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment587Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment587Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
