import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment105Component } from './experiment105.component';

describe('Experiment105Component', () => {
  let component: Experiment105Component;
  let fixture: ComponentFixture<Experiment105Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment105Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment105Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
