import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment326Component } from './experiment326.component';

describe('Experiment326Component', () => {
  let component: Experiment326Component;
  let fixture: ComponentFixture<Experiment326Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment326Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment326Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
