import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment977Component } from './experiment977.component';

describe('Experiment977Component', () => {
  let component: Experiment977Component;
  let fixture: ComponentFixture<Experiment977Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment977Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment977Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
