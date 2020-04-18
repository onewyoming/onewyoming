import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment508Component } from './experiment508.component';

describe('Experiment508Component', () => {
  let component: Experiment508Component;
  let fixture: ComponentFixture<Experiment508Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment508Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment508Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
