import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment767Component } from './experiment767.component';

describe('Experiment767Component', () => {
  let component: Experiment767Component;
  let fixture: ComponentFixture<Experiment767Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment767Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment767Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
