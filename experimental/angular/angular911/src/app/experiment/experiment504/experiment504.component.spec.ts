import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment504Component } from './experiment504.component';

describe('Experiment504Component', () => {
  let component: Experiment504Component;
  let fixture: ComponentFixture<Experiment504Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment504Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment504Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
