import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment512Component } from './experiment512.component';

describe('Experiment512Component', () => {
  let component: Experiment512Component;
  let fixture: ComponentFixture<Experiment512Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment512Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment512Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
