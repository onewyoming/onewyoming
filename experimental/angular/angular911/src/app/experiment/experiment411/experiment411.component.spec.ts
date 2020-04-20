import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment411Component } from './experiment411.component';

describe('Experiment411Component', () => {
  let component: Experiment411Component;
  let fixture: ComponentFixture<Experiment411Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment411Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment411Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
