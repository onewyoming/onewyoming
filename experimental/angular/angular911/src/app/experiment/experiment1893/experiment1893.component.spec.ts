import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1893Component } from './experiment1893.component';

describe('Experiment1893Component', () => {
  let component: Experiment1893Component;
  let fixture: ComponentFixture<Experiment1893Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1893Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1893Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
