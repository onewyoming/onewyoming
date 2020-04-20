import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1288Component } from './experiment1288.component';

describe('Experiment1288Component', () => {
  let component: Experiment1288Component;
  let fixture: ComponentFixture<Experiment1288Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1288Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1288Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
