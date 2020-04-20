import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment747Component } from './experiment747.component';

describe('Experiment747Component', () => {
  let component: Experiment747Component;
  let fixture: ComponentFixture<Experiment747Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment747Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment747Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
