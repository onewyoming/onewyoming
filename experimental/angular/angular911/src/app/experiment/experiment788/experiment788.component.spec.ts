import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment788Component } from './experiment788.component';

describe('Experiment788Component', () => {
  let component: Experiment788Component;
  let fixture: ComponentFixture<Experiment788Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment788Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment788Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
