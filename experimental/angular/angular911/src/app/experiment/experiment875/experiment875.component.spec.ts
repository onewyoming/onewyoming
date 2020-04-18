import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment875Component } from './experiment875.component';

describe('Experiment875Component', () => {
  let component: Experiment875Component;
  let fixture: ComponentFixture<Experiment875Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment875Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment875Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
