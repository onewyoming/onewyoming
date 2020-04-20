import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1138Component } from './experiment1138.component';

describe('Experiment1138Component', () => {
  let component: Experiment1138Component;
  let fixture: ComponentFixture<Experiment1138Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1138Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1138Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
