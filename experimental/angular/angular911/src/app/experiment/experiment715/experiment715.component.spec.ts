import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment715Component } from './experiment715.component';

describe('Experiment715Component', () => {
  let component: Experiment715Component;
  let fixture: ComponentFixture<Experiment715Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment715Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment715Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
