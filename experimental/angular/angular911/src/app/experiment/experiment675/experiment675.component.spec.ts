import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment675Component } from './experiment675.component';

describe('Experiment675Component', () => {
  let component: Experiment675Component;
  let fixture: ComponentFixture<Experiment675Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment675Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment675Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
