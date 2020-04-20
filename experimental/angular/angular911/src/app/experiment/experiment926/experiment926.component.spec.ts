import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment926Component } from './experiment926.component';

describe('Experiment926Component', () => {
  let component: Experiment926Component;
  let fixture: ComponentFixture<Experiment926Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment926Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment926Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
