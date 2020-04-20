import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment349Component } from './experiment349.component';

describe('Experiment349Component', () => {
  let component: Experiment349Component;
  let fixture: ComponentFixture<Experiment349Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment349Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment349Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
