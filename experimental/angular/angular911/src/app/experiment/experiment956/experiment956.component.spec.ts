import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment956Component } from './experiment956.component';

describe('Experiment956Component', () => {
  let component: Experiment956Component;
  let fixture: ComponentFixture<Experiment956Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment956Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment956Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
