import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment998Component } from './experiment998.component';

describe('Experiment998Component', () => {
  let component: Experiment998Component;
  let fixture: ComponentFixture<Experiment998Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment998Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment998Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
