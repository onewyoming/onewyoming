import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment513Component } from './experiment513.component';

describe('Experiment513Component', () => {
  let component: Experiment513Component;
  let fixture: ComponentFixture<Experiment513Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment513Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment513Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
