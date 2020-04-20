import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment841Component } from './experiment841.component';

describe('Experiment841Component', () => {
  let component: Experiment841Component;
  let fixture: ComponentFixture<Experiment841Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment841Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment841Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
