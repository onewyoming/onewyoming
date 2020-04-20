import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment340Component } from './experiment340.component';

describe('Experiment340Component', () => {
  let component: Experiment340Component;
  let fixture: ComponentFixture<Experiment340Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment340Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment340Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
