import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment87Component } from './experiment87.component';

describe('Experiment87Component', () => {
  let component: Experiment87Component;
  let fixture: ComponentFixture<Experiment87Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment87Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment87Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
