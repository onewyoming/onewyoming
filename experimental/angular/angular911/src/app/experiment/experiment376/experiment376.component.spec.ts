import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment376Component } from './experiment376.component';

describe('Experiment376Component', () => {
  let component: Experiment376Component;
  let fixture: ComponentFixture<Experiment376Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment376Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment376Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
