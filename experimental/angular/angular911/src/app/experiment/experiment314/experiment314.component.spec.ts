import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment314Component } from './experiment314.component';

describe('Experiment314Component', () => {
  let component: Experiment314Component;
  let fixture: ComponentFixture<Experiment314Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment314Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment314Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
