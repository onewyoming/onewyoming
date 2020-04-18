import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment742Component } from './experiment742.component';

describe('Experiment742Component', () => {
  let component: Experiment742Component;
  let fixture: ComponentFixture<Experiment742Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment742Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment742Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
