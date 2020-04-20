import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment684Component } from './experiment684.component';

describe('Experiment684Component', () => {
  let component: Experiment684Component;
  let fixture: ComponentFixture<Experiment684Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment684Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment684Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
