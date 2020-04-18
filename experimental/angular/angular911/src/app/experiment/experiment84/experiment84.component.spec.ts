import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment84Component } from './experiment84.component';

describe('Experiment84Component', () => {
  let component: Experiment84Component;
  let fixture: ComponentFixture<Experiment84Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment84Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment84Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
