import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment432Component } from './experiment432.component';

describe('Experiment432Component', () => {
  let component: Experiment432Component;
  let fixture: ComponentFixture<Experiment432Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment432Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment432Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
