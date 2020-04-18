import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment775Component } from './experiment775.component';

describe('Experiment775Component', () => {
  let component: Experiment775Component;
  let fixture: ComponentFixture<Experiment775Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment775Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment775Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
