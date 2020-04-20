import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1196Component } from './experiment1196.component';

describe('Experiment1196Component', () => {
  let component: Experiment1196Component;
  let fixture: ComponentFixture<Experiment1196Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1196Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1196Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
