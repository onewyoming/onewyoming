import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment255Component } from './experiment255.component';

describe('Experiment255Component', () => {
  let component: Experiment255Component;
  let fixture: ComponentFixture<Experiment255Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment255Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment255Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
