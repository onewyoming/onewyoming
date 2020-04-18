import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment844Component } from './experiment844.component';

describe('Experiment844Component', () => {
  let component: Experiment844Component;
  let fixture: ComponentFixture<Experiment844Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment844Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment844Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
