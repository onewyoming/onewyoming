import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment860Component } from './experiment860.component';

describe('Experiment860Component', () => {
  let component: Experiment860Component;
  let fixture: ComponentFixture<Experiment860Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment860Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment860Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
