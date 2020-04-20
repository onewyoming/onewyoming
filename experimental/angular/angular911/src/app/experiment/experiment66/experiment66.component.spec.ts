import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment66Component } from './experiment66.component';

describe('Experiment66Component', () => {
  let component: Experiment66Component;
  let fixture: ComponentFixture<Experiment66Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment66Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment66Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
