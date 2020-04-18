import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment689Component } from './experiment689.component';

describe('Experiment689Component', () => {
  let component: Experiment689Component;
  let fixture: ComponentFixture<Experiment689Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment689Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment689Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
