import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment242Component } from './experiment242.component';

describe('Experiment242Component', () => {
  let component: Experiment242Component;
  let fixture: ComponentFixture<Experiment242Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment242Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment242Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
