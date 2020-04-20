import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment439Component } from './experiment439.component';

describe('Experiment439Component', () => {
  let component: Experiment439Component;
  let fixture: ComponentFixture<Experiment439Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment439Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment439Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
