import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1823Component } from './experiment1823.component';

describe('Experiment1823Component', () => {
  let component: Experiment1823Component;
  let fixture: ComponentFixture<Experiment1823Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1823Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1823Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
