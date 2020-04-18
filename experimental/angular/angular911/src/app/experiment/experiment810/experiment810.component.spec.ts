import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment810Component } from './experiment810.component';

describe('Experiment810Component', () => {
  let component: Experiment810Component;
  let fixture: ComponentFixture<Experiment810Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment810Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment810Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
