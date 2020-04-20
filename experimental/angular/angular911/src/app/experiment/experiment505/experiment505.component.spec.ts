import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment505Component } from './experiment505.component';

describe('Experiment505Component', () => {
  let component: Experiment505Component;
  let fixture: ComponentFixture<Experiment505Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment505Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment505Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
