import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment796Component } from './experiment796.component';

describe('Experiment796Component', () => {
  let component: Experiment796Component;
  let fixture: ComponentFixture<Experiment796Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment796Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment796Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
