import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment30Component } from './experiment30.component';

describe('Experiment30Component', () => {
  let component: Experiment30Component;
  let fixture: ComponentFixture<Experiment30Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment30Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
