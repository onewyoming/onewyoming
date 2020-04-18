import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment923Component } from './experiment923.component';

describe('Experiment923Component', () => {
  let component: Experiment923Component;
  let fixture: ComponentFixture<Experiment923Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment923Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment923Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
