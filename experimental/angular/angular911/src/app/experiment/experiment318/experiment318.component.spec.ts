import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment318Component } from './experiment318.component';

describe('Experiment318Component', () => {
  let component: Experiment318Component;
  let fixture: ComponentFixture<Experiment318Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment318Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment318Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
