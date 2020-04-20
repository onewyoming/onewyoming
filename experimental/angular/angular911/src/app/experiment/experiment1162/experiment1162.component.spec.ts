import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1162Component } from './experiment1162.component';

describe('Experiment1162Component', () => {
  let component: Experiment1162Component;
  let fixture: ComponentFixture<Experiment1162Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1162Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1162Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
