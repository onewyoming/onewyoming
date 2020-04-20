import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment325Component } from './experiment325.component';

describe('Experiment325Component', () => {
  let component: Experiment325Component;
  let fixture: ComponentFixture<Experiment325Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment325Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment325Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
