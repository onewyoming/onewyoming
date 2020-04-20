import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1820Component } from './experiment1820.component';

describe('Experiment1820Component', () => {
  let component: Experiment1820Component;
  let fixture: ComponentFixture<Experiment1820Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1820Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1820Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
