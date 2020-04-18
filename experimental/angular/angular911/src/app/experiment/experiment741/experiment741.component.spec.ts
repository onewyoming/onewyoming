import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment741Component } from './experiment741.component';

describe('Experiment741Component', () => {
  let component: Experiment741Component;
  let fixture: ComponentFixture<Experiment741Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment741Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment741Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
