import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1330Component } from './experiment1330.component';

describe('Experiment1330Component', () => {
  let component: Experiment1330Component;
  let fixture: ComponentFixture<Experiment1330Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1330Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1330Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
