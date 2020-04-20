import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1984Component } from './experiment1984.component';

describe('Experiment1984Component', () => {
  let component: Experiment1984Component;
  let fixture: ComponentFixture<Experiment1984Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1984Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1984Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
