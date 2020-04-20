import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment897Component } from './experiment897.component';

describe('Experiment897Component', () => {
  let component: Experiment897Component;
  let fixture: ComponentFixture<Experiment897Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment897Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment897Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
