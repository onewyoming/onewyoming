import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment443Component } from './experiment443.component';

describe('Experiment443Component', () => {
  let component: Experiment443Component;
  let fixture: ComponentFixture<Experiment443Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment443Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment443Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
