import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1024Component } from './experiment1024.component';

describe('Experiment1024Component', () => {
  let component: Experiment1024Component;
  let fixture: ComponentFixture<Experiment1024Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1024Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1024Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
