import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment703Component } from './experiment703.component';

describe('Experiment703Component', () => {
  let component: Experiment703Component;
  let fixture: ComponentFixture<Experiment703Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment703Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment703Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
