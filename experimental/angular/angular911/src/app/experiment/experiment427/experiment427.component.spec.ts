import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment427Component } from './experiment427.component';

describe('Experiment427Component', () => {
  let component: Experiment427Component;
  let fixture: ComponentFixture<Experiment427Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment427Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment427Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
