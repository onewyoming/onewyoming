import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1514Component } from './experiment1514.component';

describe('Experiment1514Component', () => {
  let component: Experiment1514Component;
  let fixture: ComponentFixture<Experiment1514Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1514Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1514Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
