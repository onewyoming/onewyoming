import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1305Component } from './experiment1305.component';

describe('Experiment1305Component', () => {
  let component: Experiment1305Component;
  let fixture: ComponentFixture<Experiment1305Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1305Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1305Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
