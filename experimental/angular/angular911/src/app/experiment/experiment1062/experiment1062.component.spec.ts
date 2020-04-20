import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1062Component } from './experiment1062.component';

describe('Experiment1062Component', () => {
  let component: Experiment1062Component;
  let fixture: ComponentFixture<Experiment1062Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1062Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1062Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
