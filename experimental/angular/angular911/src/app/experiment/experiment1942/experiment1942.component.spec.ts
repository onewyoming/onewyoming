import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1942Component } from './experiment1942.component';

describe('Experiment1942Component', () => {
  let component: Experiment1942Component;
  let fixture: ComponentFixture<Experiment1942Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1942Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1942Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
