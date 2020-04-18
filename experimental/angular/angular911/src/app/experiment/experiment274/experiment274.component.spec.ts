import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment274Component } from './experiment274.component';

describe('Experiment274Component', () => {
  let component: Experiment274Component;
  let fixture: ComponentFixture<Experiment274Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment274Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment274Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
