import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment249Component } from './experiment249.component';

describe('Experiment249Component', () => {
  let component: Experiment249Component;
  let fixture: ComponentFixture<Experiment249Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment249Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment249Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
