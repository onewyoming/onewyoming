import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment566Component } from './experiment566.component';

describe('Experiment566Component', () => {
  let component: Experiment566Component;
  let fixture: ComponentFixture<Experiment566Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment566Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment566Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
