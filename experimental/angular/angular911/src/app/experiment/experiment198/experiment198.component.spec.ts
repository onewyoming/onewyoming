import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment198Component } from './experiment198.component';

describe('Experiment198Component', () => {
  let component: Experiment198Component;
  let fixture: ComponentFixture<Experiment198Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment198Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment198Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
