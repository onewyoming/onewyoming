import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1401Component } from './experiment1401.component';

describe('Experiment1401Component', () => {
  let component: Experiment1401Component;
  let fixture: ComponentFixture<Experiment1401Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1401Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1401Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
