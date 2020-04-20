import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment166Component } from './experiment166.component';

describe('Experiment166Component', () => {
  let component: Experiment166Component;
  let fixture: ComponentFixture<Experiment166Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment166Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment166Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
