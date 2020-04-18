import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment620Component } from './experiment620.component';

describe('Experiment620Component', () => {
  let component: Experiment620Component;
  let fixture: ComponentFixture<Experiment620Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment620Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment620Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
