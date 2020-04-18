import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment412Component } from './experiment412.component';

describe('Experiment412Component', () => {
  let component: Experiment412Component;
  let fixture: ComponentFixture<Experiment412Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment412Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment412Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
