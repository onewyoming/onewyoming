import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment771Component } from './experiment771.component';

describe('Experiment771Component', () => {
  let component: Experiment771Component;
  let fixture: ComponentFixture<Experiment771Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment771Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment771Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
