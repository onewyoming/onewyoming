import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment648Component } from './experiment648.component';

describe('Experiment648Component', () => {
  let component: Experiment648Component;
  let fixture: ComponentFixture<Experiment648Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment648Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment648Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
