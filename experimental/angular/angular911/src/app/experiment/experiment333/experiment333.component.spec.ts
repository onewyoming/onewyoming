import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment333Component } from './experiment333.component';

describe('Experiment333Component', () => {
  let component: Experiment333Component;
  let fixture: ComponentFixture<Experiment333Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment333Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment333Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
