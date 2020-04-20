import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment906Component } from './experiment906.component';

describe('Experiment906Component', () => {
  let component: Experiment906Component;
  let fixture: ComponentFixture<Experiment906Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment906Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment906Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
