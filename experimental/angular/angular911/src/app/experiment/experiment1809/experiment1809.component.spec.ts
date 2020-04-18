import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1809Component } from './experiment1809.component';

describe('Experiment1809Component', () => {
  let component: Experiment1809Component;
  let fixture: ComponentFixture<Experiment1809Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1809Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1809Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
