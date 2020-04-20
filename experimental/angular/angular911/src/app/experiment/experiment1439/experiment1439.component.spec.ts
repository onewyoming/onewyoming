import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1439Component } from './experiment1439.component';

describe('Experiment1439Component', () => {
  let component: Experiment1439Component;
  let fixture: ComponentFixture<Experiment1439Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1439Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1439Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
