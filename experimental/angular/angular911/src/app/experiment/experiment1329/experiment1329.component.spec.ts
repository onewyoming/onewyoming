import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1329Component } from './experiment1329.component';

describe('Experiment1329Component', () => {
  let component: Experiment1329Component;
  let fixture: ComponentFixture<Experiment1329Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1329Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1329Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
