import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1182Component } from './experiment1182.component';

describe('Experiment1182Component', () => {
  let component: Experiment1182Component;
  let fixture: ComponentFixture<Experiment1182Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1182Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1182Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
