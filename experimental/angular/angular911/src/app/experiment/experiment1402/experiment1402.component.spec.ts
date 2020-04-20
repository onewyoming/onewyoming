import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1402Component } from './experiment1402.component';

describe('Experiment1402Component', () => {
  let component: Experiment1402Component;
  let fixture: ComponentFixture<Experiment1402Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1402Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1402Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
