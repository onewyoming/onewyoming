import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1361Component } from './experiment1361.component';

describe('Experiment1361Component', () => {
  let component: Experiment1361Component;
  let fixture: ComponentFixture<Experiment1361Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1361Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1361Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
