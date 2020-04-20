import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1912Component } from './experiment1912.component';

describe('Experiment1912Component', () => {
  let component: Experiment1912Component;
  let fixture: ComponentFixture<Experiment1912Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1912Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1912Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
