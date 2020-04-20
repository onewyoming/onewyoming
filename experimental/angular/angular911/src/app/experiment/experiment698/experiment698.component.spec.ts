import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment698Component } from './experiment698.component';

describe('Experiment698Component', () => {
  let component: Experiment698Component;
  let fixture: ComponentFixture<Experiment698Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment698Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment698Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
