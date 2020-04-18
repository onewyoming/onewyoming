import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1539Component } from './experiment1539.component';

describe('Experiment1539Component', () => {
  let component: Experiment1539Component;
  let fixture: ComponentFixture<Experiment1539Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1539Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1539Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
