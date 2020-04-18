import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment262Component } from './experiment262.component';

describe('Experiment262Component', () => {
  let component: Experiment262Component;
  let fixture: ComponentFixture<Experiment262Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment262Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment262Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
