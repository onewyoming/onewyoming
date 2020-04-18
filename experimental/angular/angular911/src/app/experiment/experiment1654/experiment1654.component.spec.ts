import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1654Component } from './experiment1654.component';

describe('Experiment1654Component', () => {
  let component: Experiment1654Component;
  let fixture: ComponentFixture<Experiment1654Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1654Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1654Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
