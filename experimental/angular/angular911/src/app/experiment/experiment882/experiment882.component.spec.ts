import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment882Component } from './experiment882.component';

describe('Experiment882Component', () => {
  let component: Experiment882Component;
  let fixture: ComponentFixture<Experiment882Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment882Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment882Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
