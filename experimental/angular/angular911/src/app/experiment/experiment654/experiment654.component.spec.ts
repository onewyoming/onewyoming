import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment654Component } from './experiment654.component';

describe('Experiment654Component', () => {
  let component: Experiment654Component;
  let fixture: ComponentFixture<Experiment654Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment654Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment654Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
