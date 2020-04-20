import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment942Component } from './experiment942.component';

describe('Experiment942Component', () => {
  let component: Experiment942Component;
  let fixture: ComponentFixture<Experiment942Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment942Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment942Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
