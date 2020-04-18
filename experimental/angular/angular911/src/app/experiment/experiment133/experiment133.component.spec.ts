import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment133Component } from './experiment133.component';

describe('Experiment133Component', () => {
  let component: Experiment133Component;
  let fixture: ComponentFixture<Experiment133Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment133Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment133Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
