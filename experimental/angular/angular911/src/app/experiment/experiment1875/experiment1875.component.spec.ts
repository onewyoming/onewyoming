import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1875Component } from './experiment1875.component';

describe('Experiment1875Component', () => {
  let component: Experiment1875Component;
  let fixture: ComponentFixture<Experiment1875Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1875Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1875Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
