import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment732Component } from './experiment732.component';

describe('Experiment732Component', () => {
  let component: Experiment732Component;
  let fixture: ComponentFixture<Experiment732Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment732Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment732Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
