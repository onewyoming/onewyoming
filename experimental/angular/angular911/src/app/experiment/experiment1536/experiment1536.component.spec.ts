import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1536Component } from './experiment1536.component';

describe('Experiment1536Component', () => {
  let component: Experiment1536Component;
  let fixture: ComponentFixture<Experiment1536Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1536Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1536Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
